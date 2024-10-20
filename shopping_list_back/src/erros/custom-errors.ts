import { HttpException, HttpStatus } from "@nestjs/common";

export class UnauthorizedError extends HttpException {
  constructor() {
    super('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}

export class InternalServerError extends HttpException {
  constructor() {
    super('Internal Server Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}