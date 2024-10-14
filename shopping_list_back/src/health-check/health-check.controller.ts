import { Controller, Get, HttpCode } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
  constructor() {}

  @Get()
  @HttpCode(200)
  findAll() {
    return { message: "I'm a live" };
  }
}
