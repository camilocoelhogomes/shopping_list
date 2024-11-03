import { Injectable } from '@nestjs/common';
import { ProductCategory } from '../../data-base/entity/product-category.entity';

@Injectable()
export class ProductCategoryService {
  create(createProductCategoryDto: Partial<ProductCategory>) {
    return 'This action adds a new productCategory';
  }

  findAll() {
    return `This action returns all productCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productCategory`;
  }

  update(id: number, updateProductCategoryDto: Partial<ProductCategory>) {
    return `This action updates a #${id} productCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productCategory`;
  }
}
