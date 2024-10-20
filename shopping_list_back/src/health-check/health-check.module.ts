import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { AuthMiddleware } from '../middlewrers/auth/auth.middleres';
import { FirebaseService } from '../firebase/firebase.service';
import { FirebaseModule } from '../firebase/firebase.module';

@Module({
  controllers: [HealthCheckController],
  providers: [],
  imports: []
})
export class HealthCheckModule {
}
