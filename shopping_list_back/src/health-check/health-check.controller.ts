import { Controller, Get, HttpCode, Headers, Logger } from '@nestjs/common';


@Controller('health-check')
export class HealthCheckController {
  constructor() { }
  private readonly log = new Logger(HealthCheckController.name);

  @Get()
  @HttpCode(200)
  findAll(@Headers() headers: { origin: string, host: string }) {
    this.log.log(JSON.stringify(headers));
    return { message: "I'm a live", ...headers };
  }
}
