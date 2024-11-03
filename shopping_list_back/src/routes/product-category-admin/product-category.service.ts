import { Inject, Injectable, Logger } from '@nestjs/common';
import { ProductCategory } from '../../data-base/entity/product-category.entity';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoryService {

  private readonly log = new Logger(ProductCategoryService.name);

  constructor(
    @Inject(DatabaseDiTokens.PRODUCT_CATEGORY_REPOSITORY)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) { }

  async create(createProductCategoryDto: Partial<ProductCategory>) {
    const result = await this.productCategoryRepository.save(this.productCategoryRepository.create(createProductCategoryDto));
    return result;
  }

  async findAll(merchantId: number) {
    return await this.productCategoryRepository.find({ where: { merchantId } });
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
