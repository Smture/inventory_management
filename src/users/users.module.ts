import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserRepository } from './repositories/user.repository';
import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  providers: [
    UsersService,
    {
      provide: 'UserRepositoryInterface',
      useClass: UserRepository,
    }
  ],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule { }
