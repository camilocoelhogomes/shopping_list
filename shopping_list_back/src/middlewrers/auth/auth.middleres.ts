import { HttpException, HttpStatus, Inject, Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction } from "express";
import { UnauthorizedError } from "../../erros/custom-errors";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) { }

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers['authorization']!.split(' ')[1];
      const user = this.jwtService.verify(token);
      req['user'] = user;
      next();
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}