import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MerchantOwnerService } from './merchant-owner.service';
import { MerchantOwnerController } from './merchant-owner.controller';
import { FirebaseModule } from '../firebase/firebase.module';
import { AuthMiddleware } from '../middlewrers/auth/auth.middleres';
import { DataBaseModule } from '../data-base/data-base.module';
import { merchantOwnerProviders } from './merchant-owner.providers';

@Module({
  controllers: [MerchantOwnerController],
  providers: [...merchantOwnerProviders, MerchantOwnerService],
  imports: [FirebaseModule, DataBaseModule],
  exports: [...merchantOwnerProviders]
})
export class MerchantOwnerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(MerchantOwnerController);
  }
}
