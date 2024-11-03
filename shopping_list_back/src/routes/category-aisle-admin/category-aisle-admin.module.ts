import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CategoryAisleAdminService } from './category-aisle-admin.service';
import { CategoryAisleAdminController } from './category-aisle-admin.controller';
import { DataBaseModule } from '../../data-base/data-base.module';
import { FirebaseModule } from '../../firebase/firebase.module';
import { MiddlewrersModule } from '../../middlewrers/middlewrers.module';
import { AuthMiddleware } from '../../middlewrers/auth/auth.middleres';

@Module({
  controllers: [CategoryAisleAdminController],
  providers: [CategoryAisleAdminService],
  imports: [DataBaseModule, FirebaseModule, MiddlewrersModule],
})
export class CategoryAisleAdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(CategoryAisleAdminController);
  }
}
