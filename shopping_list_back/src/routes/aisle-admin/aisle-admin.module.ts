import { Module } from '@nestjs/common';
import { AisleAdminService } from './aisle-admin.service';
import { AisleAdminController } from './aisle-admin.controller';

@Module({
  controllers: [AisleAdminController],
  providers: [AisleAdminService],
})
export class AisleAdminModule {}
