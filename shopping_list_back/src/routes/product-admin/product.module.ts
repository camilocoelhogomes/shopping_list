import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DataBaseModule } from '../../data-base/data-base.module';
import { FirebaseModule } from '../../firebase/firebase.module';
import { MiddlewrersModule } from '../../middlewrers/middlewrers.module';
import { AuthMiddleware } from '../../middlewrers/auth/auth.middleres';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [MiddlewrersModule, DataBaseModule, FirebaseModule],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ProductController);
  }
}
