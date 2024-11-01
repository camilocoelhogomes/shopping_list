import { Module } from '@nestjs/common';
import { AuthMiddleware } from './auth/auth.middleres';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  imports: [FirebaseModule],
  providers: [AuthMiddleware],
  exports: [AuthMiddleware],
})
export class MiddlewrersModule {}
