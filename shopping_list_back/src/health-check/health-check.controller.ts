import { Controller, Get, HttpCode, Headers, Logger } from '@nestjs/common';


@Controller('health-check')
export class HealthCheckController {
  constructor() { }
  private readonly log = new Logger(HealthCheckController.name);

  @Get()
  @HttpCode(200)
  findAll(@Headers() headers: { origin: string, host: string }) {
    this.log.log(`Request from ${headers.origin} to ${headers.host}`);
    return { message: "I'm a live" };
  }
}
