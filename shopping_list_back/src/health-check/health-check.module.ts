import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller';
import { AuthMiddleware } from '../middlewrers/auth/auth.middleres';

@Module({
  controllers: [HealthCheckController],
  providers: [],
})
export class HealthCheckModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(HealthCheckController);
  }
}
