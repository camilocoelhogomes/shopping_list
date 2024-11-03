import {
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ProductCategory } from '../../data-base/entity/product-category.entity';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoryService {
  private readonly log = new Logger(ProductCategoryService.name);

  constructor(
    @Inject(DatabaseDiTokens.PRODUCT_CATEGORY_REPOSITORY)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  async create(createProductCategoryDto: Partial<ProductCategory>) {
    const productCategory = await this.productCategoryRepository.findOne({
      where: {
        categoryName: createProductCategoryDto.categoryName,
        merchantId: createProductCategoryDto.merchantId,
      },
    });
    if (productCategory) {
      throw new ConflictException(
        `Product category with name ${createProductCategoryDto.categoryName} already exists`,
      );
    }
    const result = await this.productCategoryRepository.save(
      this.productCategoryRepository.create(createProductCategoryDto),
    );
    return result;
  }

  async findAll(merchantId: number) {
    return await this.productCategoryRepository.find({ where: { merchantId } });
  }

  async findOne(id: number, merchantId: number) {
    return await this.productCategoryRepository.findOne({
      where: { categoryId: id, merchantId },
    });
  }

  async update(updateProductCategoryDto: Partial<ProductCategory>) {
    const update = await this.productCategoryRepository.update(
      {
        categoryId: updateProductCategoryDto.categoryId,
        merchantId: updateProductCategoryDto.merchantId,
      },
      updateProductCategoryDto,
    );

    if (update.affected === 0) {
      throw new NotFoundException(
        `Product category with id ${updateProductCategoryDto.categoryId} not found`,
      );
    }
  }

  async remove(id: number) {
    return await this.productCategoryRepository.update(
      { categoryId: id },
      { active: false },
    );
  }
}
