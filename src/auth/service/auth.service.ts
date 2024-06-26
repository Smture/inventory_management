import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ErrorConstants } from 'src/common/error.constants';
import { UsersService } from 'src/users/services/users.service';
import { LoginUserDto } from '../dto/login-user-dto';
import * as bcrypt from 'bcryptjs';
import { LoggerService } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
        @Inject('LoggerService') private readonly logger: LoggerService) {
    }

    /**
 * Login user function
 * @param LoginUserDto 
 * @returns {JWTToken} string
 */
async signIn(LoginUserDto: LoginUserDto): Promise<any> {
    if (!LoginUserDto.username && !LoginUserDto.email) {
        throw new UnauthorizedException(ErrorConstants.INVALID_LOGIN_IDENTIFIER);
    }

    let user;
    if (LoginUserDto.username) {
        user = await this.usersService.findByUserName(LoginUserDto.username);
    } else {
        user = await this.usersService.findByEmail(LoginUserDto.email);
    }

    if (!user) {
        throw new UnauthorizedException(ErrorConstants.INVALID_CREDENTIALS);
    }

    const isPasswordValid = await bcrypt.compare(LoginUserDto.password, user.password);
    if (!isPasswordValid) {
        throw new UnauthorizedException(ErrorConstants.INVALID_CREDENTIALS);
    }

    this.logger.error("Removing unwanted keys.");
    let { password, _id, ...userResponse } = user.toObject();

    this.logger.log("Generating Token.");
    const payload = { user_id: user._id, username: user.username };
    const access_token = await this.jwtService.signAsync(payload);

    userResponse.token = access_token;
    return userResponse;
}


    /**
     * Register user
     * @param RegisterUserDTO
     */
    async register(userDto: RegisterUserDTO): Promise<any> {
        console.log("Checking if user already exists by username, email, or mobile.");

        let user = await this.usersService.findByUserName(userDto.username);

        if (!user) {
            user = await this.usersService.findByEmail(userDto.email);
            console.log("Checked email.", user);
        }

        if (!user) {
            user = await this.usersService.findByMobile(userDto.mobile);
            console.log("Checked mobile.", user);
        }

        if (!user) {
            console.log("New User. Creating user");
                
            const saltRounds = +process.env.BCRYPT_HASH_ROUNDS;
            const hashedPassword = await bcrypt.hash(userDto.password, saltRounds);

            const newUserDto = { ...userDto, password: hashedPassword };
            const createdUser = await this.usersService.register(newUserDto);

            console.log("Generating Token.")
            const payload = { user_id: createdUser._id, username: createdUser.username }
            const access_token = await this.jwtService.signAsync(payload)

            let createdUserResponse = {
                username: createdUser.username,
                email: createdUser.email,
                access_token: access_token
            }
            return createdUserResponse;

        } else {
            console.log("User already exists.", user);
            return "User Already Exists, Please login";
        }
    }
}
