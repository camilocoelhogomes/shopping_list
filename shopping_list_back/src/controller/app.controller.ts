import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller('live')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  getHello(): string {
    return "I'm alive 2";
  }
}
