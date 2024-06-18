import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

console.log("Connection URI:", process.env.CONNECTION_URI);
console.log("Database Name:", process.env.DB_NAME);

@Module({
  imports: [
    MongooseModule.forRoot(process.env.CONNECTION_URI + process.env.DB_NAME),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
