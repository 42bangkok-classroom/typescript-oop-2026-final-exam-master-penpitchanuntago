import { Injectable } from '@nestjs/common';
//import  purchase from "../data"

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello NestJS";
  }
}
