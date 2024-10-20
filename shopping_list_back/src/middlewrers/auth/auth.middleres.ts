import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { UnauthorizedError } from '../../erros/custom-errors';
import { FirebaseService } from '../../firebase/firebase.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly log: Logger = new Logger(AuthMiddleware.name);

  constructor(private readonly configService: FirebaseService) { }

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      if (process.env.NODE_ENV === 'dev') {
        req.headers['uid'] = process.env.DEV_UID;
        next();
        return;
      }

      const token = req.headers['authorization']!.split(' ')[1];
      const tokenDecoded = await this.configService.verifyToken(token);
      this.log.debug(`Token decoded: ${JSON.stringify(tokenDecoded)}`);
      req.headers['uid'] = tokenDecoded.uid;
      next();
    } catch (error) {
      throw new UnauthorizedError();
    }
  }
}
