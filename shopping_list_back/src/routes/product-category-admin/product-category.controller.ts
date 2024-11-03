import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategory } from '../../data-base/entity/product-category.entity';

@Controller('admin/merchant/:merchantId/product-category')
export class ProductCategoryController {
  constructor(
    private readonly productCategoryService: ProductCategoryService,
  ) {}

  @Post()
  create(
    @Body() createProductCategoryDto: Partial<ProductCategory>,
    @Param('merchantId') merchantId: string,
  ) {
    return this.productCategoryService.create({
      ...createProductCategoryDto,
      merchantId: +merchantId,
    });
  }

  @Get()
  findAll(@Param('merchantId') merchantId: string) {
    return this.productCategoryService.findAll(+merchantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('merchantId') merchantId: string) {
    return this.productCategoryService.findOne(+id, +merchantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Param('merchantId') merchantId: string,
    @Body() updateProductCategoryDto: Partial<ProductCategory>,
  ) {
    return this.productCategoryService.update({
      ...updateProductCategoryDto,
      categoryId: +id,
      merchantId: +merchantId,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productCategoryService.remove(+id);
  }
}
