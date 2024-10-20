import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MerchantOwnerService } from './merchant-owner.service';
import { MerchantOwnerController } from './merchant-owner.controller';
import { FirebaseModule } from '../firebase/firebase.module';
import { AuthMiddleware } from '../middlewrers/auth/auth.middleres';

@Module({
  controllers: [MerchantOwnerController],
  providers: [MerchantOwnerService],
  imports: [FirebaseModule]
})
export class MerchantOwnerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(MerchantOwnerController);
  }
}
