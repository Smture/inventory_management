import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LoggingModule } from 'src/logging/logger.module';


@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '6000s' },
    }),
    LoggingModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
