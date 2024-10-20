import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { InternalServerError } from './custom-errors';

@Catch()
export class ExeptionFallBack implements ExceptionFilter {
  private readonly log = new Logger(ExeptionFallBack.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(e: any, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    let error: HttpException;

    if (e instanceof HttpException) {
      error = e;
    } else {
      this.log.error(e, e.stack, httpAdapter.getRequestUrl(ctx.getRequest()));
      error = new InternalServerError();
    }
    const responseBody = {
      statusCode: error.getStatus(),
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message: error.message,
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, error.getStatus());
  }
}
