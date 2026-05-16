import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; version: string } {
    return {
      message: 'Welcome to Office Management System API',
      version: '1.0.0',
    };
  }
}
