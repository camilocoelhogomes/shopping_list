import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MerchantAdminService } from './merchant-admin.service';
import { MerchantAdminController } from './merchant-admin.controller';
import { FirebaseModule } from '../../firebase/firebase.module';
import { DataBaseModule } from '../../data-base/data-base.module';
import { AuthMiddleware } from '../../middlewrers/auth/auth.middleres';
import { MerchantOwnerModule } from '../merchant-owner/merchant-owner.module';
import { MiddlewrersModule } from '../../middlewrers/middlewrers.module';

@Module({
  controllers: [MerchantAdminController],
  providers: [MerchantAdminService],
  imports: [DataBaseModule, MerchantOwnerModule, MiddlewrersModule],
})
export class MerchantAdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(MerchantAdminController);
  }
}
