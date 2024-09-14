import { Controller, Get, HttpCode } from '@nestjs/common';
@Controller('live')
export class AppController {
  @Get()
  @HttpCode(200)
  getHello(): string {
    return "I'm alive 2";
  }
}
