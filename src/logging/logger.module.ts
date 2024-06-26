import { Module } from '@nestjs/common';
import { WinstonLoggerService } from './logger-service';


@Module({
    providers: [{
        provide: 'LoggerService',
        useClass: WinstonLoggerService,
      },
      WinstonLoggerService],
    exports: ['LoggerService', WinstonLoggerService],
})
export class LoggingModule { }
