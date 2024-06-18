import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { User } from './schemas/user.schema';
import { RestResponseDecorator } from 'src/decorators/rest-response.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  /**
   * Handles the registration of a new user.
   * @param userDto - Data transfer object containing the details of the user to register.
   * @returns A promise that resolves to the registered user.
   */
  @Post()
  register(@Body() userDto: RegisterUserDTO): Promise<User> {
    return this.usersService.register(userDto);
  }

  /**
   * Retrieves a list of all users.
   * @returns A promise that resolves to a RestResponse containing an array of users.
   */
  @Get()
  async findAll(): Promise<RestResponse<User[]>> {
    const user = await this.usersService.findAll();
    return RestResponseDecorator.forSuccess(user);
  }

  /**
   * Retrieves a user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns A promise that resolves to the user if found, or null if not found.
   */
  @Get(':id')
  findById(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findById(id);
  }
}
