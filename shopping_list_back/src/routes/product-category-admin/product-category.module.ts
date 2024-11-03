import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryController } from './product-category.controller';
import { MiddlewrersModule } from '../../middlewrers/middlewrers.module';
import { DataBaseModule } from '../../data-base/data-base.module';
import { FirebaseModule } from '../../firebase/firebase.module';
import { AuthMiddleware } from '../../middlewrers/auth/auth.middleres';

@Module({
  controllers: [ProductCategoryController],
  providers: [ProductCategoryService],
  imports: [MiddlewrersModule, DataBaseModule, FirebaseModule],
})
export class ProductCategoryModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProductCategoryController);
  }
}
