import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginUserDto } from '../dto/login-user-dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async signIn(@Body() LoginUserDto: LoginUserDto) {
        return {
            success: true,
            data: await this.authService.signIn(LoginUserDto)
        }
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    async register(@Body() userDTO: RegisterUserDTO) {
        return {
            success: true,
            data: await this.authService.register(userDTO)
        }

    }
}