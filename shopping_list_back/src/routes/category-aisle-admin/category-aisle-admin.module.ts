import { Module } from '@nestjs/common';
import { CategoryAisleAdminService } from './category-aisle-admin.service';
import { CategoryAisleAdminController } from './category-aisle-admin.controller';

@Module({
  controllers: [CategoryAisleAdminController],
  providers: [CategoryAisleAdminService],
})
export class CategoryAisleAdminModule {}
