import { Controller, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CategoryAisleAdminService } from './category-aisle-admin.service';
import { MerchantAisleCategory } from '../../data-base/entity/category-aisle.entity';

@Controller('admin/merchant/:merchantId/aisle-category')
export class CategoryAisleAdminController {
  constructor(
    private readonly categoryAisleAdminService: CategoryAisleAdminService,
  ) {}

  @Post()
  create(
    @Body() createCategoryAisleAdminDto: Partial<MerchantAisleCategory>,
    @Param('merchantId') merchantId: string,
  ) {
    return this.categoryAisleAdminService.create({
      ...createCategoryAisleAdminDto,
      merchantId: +merchantId,
    });
  }

  @Patch()
  update(
    @Body() updateCategoryAisleAdminDto: Partial<MerchantAisleCategory>,
    @Param('merchantId') merchantId: string,
  ) {
    return this.categoryAisleAdminService.update({
      ...updateCategoryAisleAdminDto,
      merchantId: +merchantId,
    });
  }

  @Delete()
  remove(
    @Param('merchantId') merchantId: string,
    @Body() relation: Partial<MerchantAisleCategory>,
  ) {
    return this.categoryAisleAdminService.remove({
      ...relation,
      merchantId: +merchantId,
    });
  }
}
