import { HttpException, HttpStatus, Inject, Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction } from "express";
import { UnauthorizedError } from "../../erros/custom-errors";
import { ConfigService } from "@nestjs/config";
import { FirebaseService } from "../../firebase/firebase.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  private readonly log: Logger = new Logger(AuthMiddleware.name);

  constructor(private readonly configService: FirebaseService) {

  }

  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers['authorization']!.split(' ')[1];
      const tokenDecoded = this.configService.verifyToken(token);
      this.log.debug(`Token decoded: ${JSON.stringify(tokenDecoded)}`);
      next();
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}