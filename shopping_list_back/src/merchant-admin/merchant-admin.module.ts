import { Module } from '@nestjs/common';
import { MerchantAdminService } from './merchant-admin.service';
import { MerchantAdminController } from './merchant-admin.controller';

@Module({
  controllers: [MerchantAdminController],
  providers: [MerchantAdminService],
})
export class MerchantAdminModule {}
