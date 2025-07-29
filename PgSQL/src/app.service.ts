import { Injectable } from '@nestjs/common';

@Injectable() // This service can be used to handle business logic
export class AppService { // This service can be injected into controllers or other services
  // This method returns a simple greeting message
  getHello(): string {
    return 'Hello World!';
  }
}
