import { Controller, Get, HttpCode, Headers, Logger, UseFilters } from '@nestjs/common';
import { ExeptionFallBack } from '../erros/ExeptionFallBack';
import { UnauthorizedError } from '../erros/custom-errors';


@Controller('health-check')
export class HealthCheckController {
  constructor() { }
  private readonly log = new Logger(HealthCheckController.name);

  @Get()
  @HttpCode(200)
  @UseFilters(ExeptionFallBack)
  findAll(@Headers() headers: { origin: string, host: string }) {
    this.log.log(`Request from ${headers.origin} to ${headers.host}`);
    return { message: "I'm a live" };
  }
}
