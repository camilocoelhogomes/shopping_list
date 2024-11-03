import { Inject, Injectable, Logger } from '@nestjs/common';
import { MerchantAisleCategory } from '../../data-base/entity/category-aisle.entity';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryAisleAdminService {
  private readonly log = new Logger(CategoryAisleAdminService.name);

  constructor(
    @Inject(DatabaseDiTokens.MERCHANT_AISLE_CATEGORY_REPOSITORY)
    private readonly categoryAisleAdminRepository: Repository<MerchantAisleCategory>,
  ) {}

  async create(merchantAisle: Partial<MerchantAisleCategory>) {
    try {
      return await this.categoryAisleAdminRepository.save(
        this.categoryAisleAdminRepository.create(merchantAisle),
      );
    } catch (error) {
      this.log.error(error);
      throw error;
    }
  }

  update(updateCategoryAisleAdminDto: Partial<MerchantAisleCategory>) {
    const queryRunner = this.categoryAisleAdminRepository.queryRunner;
    return `This action updates a categoryAisleAdmin`;
  }

  remove(realtion: Partial<MerchantAisleCategory>) {
    return `This action removes a categoryAisleAdmin`;
  }
}
