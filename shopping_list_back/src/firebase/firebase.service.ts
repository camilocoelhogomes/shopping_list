import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { credential, initializeApp } from 'firebase-admin';
import { App, refreshToken } from 'firebase-admin/app';
import { Auth, getAuth } from 'firebase-admin/auth';
import { UnauthorizedError } from '../erros/custom-errors';
import * as admin from 'firebase-admin'

@Injectable()
export class FirebaseService {

  private readonly firebaseApp: App;
  private readonly firebaseAuth: Auth;

  constructor(private readonly config: ConfigService) {
    const firebaseConfig = config.get('firebaseConfig');
    const c = credential.cert(firebaseConfig);
    this.firebaseApp = admin.initializeApp({
      credential: c,
    })
    this.firebaseAuth = getAuth(this.firebaseApp);
  }

  public async verifyToken(token: string) {
    try {
      const decodedToken = await this.firebaseAuth.verifyIdToken(token);
      return decodedToken;
    } catch (error) {
      throw new UnauthorizedError();
    }
  }

}
