import { Module } from '@nestjs/common';
import { MerchantAdminService } from './merchant-admin.service';
import { MerchantAdminController } from './merchant-admin.controller';
import { FirebaseModule } from '../firebase/firebase.module';
import { DataBaseModule } from '../data-base/data-base.module';
import { merchantAdminProviders } from './merchant-admin.providers';

@Module({
  controllers: [MerchantAdminController],
  providers: [...merchantAdminProviders, MerchantAdminService],
  imports: [FirebaseModule, DataBaseModule]
})
export class MerchantAdminModule { }
