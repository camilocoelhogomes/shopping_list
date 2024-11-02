import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AisleAdminService } from './aisle-admin.service';
import { AisleAdminController } from './aisle-admin.controller';
import { AuthMiddleware } from '../../middlewrers/auth/auth.middleres';
import { MiddlewrersModule } from '../../middlewrers/middlewrers.module';
import { FirebaseModule } from '../../firebase/firebase.module';
import { DataBaseModule } from '../../data-base/data-base.module';

@Module({
  controllers: [AisleAdminController],
  providers: [AisleAdminService],
  imports: [MiddlewrersModule, FirebaseModule, DataBaseModule],
})
export class AisleAdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(AisleAdminController);
  }
}
