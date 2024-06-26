import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { WinstonLoggerService } from './logging/logger-service';
import { LoggingModule } from './logging/logger.module';

console.log("Connection URI:", process.env.CONNECTION_URI);
console.log("Database Name:", process.env.DB_NAME);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_URI + process.env.DB_NAME),
    UsersModule,
    AuthModule,
    LoggingModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: 'LoggerService',
      useClass: WinstonLoggerService
    }],
})
export class AppModule { }
