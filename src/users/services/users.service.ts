import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryInterface } from '../interfaces/user.repository.interface';
import { User } from '../schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepositoryInterface') private readonly userRepositoryInterface: UserRepositoryInterface
  ) {}

  async register(userDto: RegisterUserDTO): Promise<User> {
    return this.userRepositoryInterface.register(userDto);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepositoryInterface.findAll();
  }

  async findById(id: string): Promise<User | null> {
    return await this.userRepositoryInterface.findById(id);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepositoryInterface.findByEmail(email);
  }

  async findByUserName(username: string): Promise<User | null> {
    return await this.userRepositoryInterface.findByUserName(username);
  }

  async findByMobile(mobile: number): Promise<User | null> {
    return await this.userRepositoryInterface.findByMobile(mobile);
  }
}
