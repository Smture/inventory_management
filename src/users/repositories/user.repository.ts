import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { UserRepositoryInterface } from '../interfaces/user.repository.interface';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) { }

  async register(userDto: RegisterUserDTO): Promise<User> {
    const newUser = new this.userModel(userDto);
    return await newUser.save();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findById(id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ "email": email }).exec();
  }

  async findByUserName(username: string): Promise<User | null> {
    return await this.userModel.findOne({ "username": username }).exec();
  }

  async findByMobile(mobile: number): Promise<User | null> {
    return await this.userModel.findOne({ "mobile":mobile }).exec();
  }
}
