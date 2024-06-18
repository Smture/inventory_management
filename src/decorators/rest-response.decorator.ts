import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { HTTP_STATUS_CODES } from 'src/common/constants';


// Interface for your RestResponse object
interface RestResponse<T> {
  statusCode: number;
  data?: T;
  message?: string;
  error?: string;
}

@Injectable()
export class RestResponseDecorator {
  wrap<T>(data?: T, message?: string, statusCode: HttpStatus = HttpStatus.OK): RestResponse<T> {
    return {
      statusCode,
      data,
      message,
    };
  }

  static forSuccess<T>(data?: T): RestResponse<T> {
    return new RestResponseDecorator().wrap(data, "Data Fetched Successfully", HTTP_STATUS_CODES.success);
  }

  static forError(message: string, statusCode: HttpStatus = HttpStatus.BAD_REQUEST): RestResponse<any> {
    return new RestResponseDecorator().wrap(undefined, message, statusCode);
  }
}

export const RestResponse = RestResponseDecorator.forSuccess;
