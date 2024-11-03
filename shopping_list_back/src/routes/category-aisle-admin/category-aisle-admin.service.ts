import { Inject, Injectable, Logger } from '@nestjs/common';
import { MerchantAisleCategory } from '../../data-base/entity/category-aisle.entity';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';
import { Not, Repository } from 'typeorm';

@Injectable()
export class CategoryAisleAdminService {
  private readonly log = new Logger(CategoryAisleAdminService.name);

  constructor(
    @Inject(DatabaseDiTokens.MERCHANT_AISLE_CATEGORY_REPOSITORY)
    private readonly categoryAisleAdminRepository: Repository<MerchantAisleCategory>,
  ) {}

  async create(merchantAisle: Partial<MerchantAisleCategory>) {
    try {
      const existsPosition = await this.categoryAisleAdminRepository.findOne({
        where: {
          merchantId: merchantAisle.merchantId,
          aisleId: merchantAisle.aisleId,
          position: merchantAisle.position,
        },
      });
      const m = this.categoryAisleAdminRepository.create(merchantAisle);
      if (!existsPosition) {
        return await this.categoryAisleAdminRepository.save(m);
      }
      const queryRunner =
        this.categoryAisleAdminRepository.manager.connection.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
      try {
        const query = queryRunner.manager
          .createQueryBuilder()
          .update(MerchantAisleCategory)
          .set({ position: () => 'position + 1' })
          .where('position >= :position', { position: merchantAisle.position });
        const [_, result] = await Promise.all([
          query.execute(),
          queryRunner.manager.save(m),
        ]);
        await queryRunner.commitTransaction();
        return result;
      } catch (error) {
        await queryRunner.rollbackTransaction();
        this.log.error(error);
        throw error;
      } finally {
        await queryRunner.release();
      }
    } catch (error) {
      this.log.error(error);
      throw error;
    }
  }

  async update(merchantAisle: Partial<MerchantAisleCategory>) {
    const merchantCategory = await this.categoryAisleAdminRepository.findOne({
      where: {
        merchantId: merchantAisle.merchantId,
        aisleId: merchantAisle.aisleId,
        categoryId: merchantAisle.categoryId,
        position: Not(merchantAisle.position),
      },
    });
    if (!merchantCategory) {
      return;
    }
    const oldPosition = merchantCategory.position;
    const queryRunner =
      this.categoryAisleAdminRepository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const updatePromise = queryRunner.manager.update(
        MerchantAisleCategory,
        {
          merchantId: merchantAisle.merchantId,
          aisleId: merchantAisle.aisleId,
          categoryId: merchantAisle.categoryId,
        },
        {
          position: merchantAisle.position,
        },
      );
      const ajPromise = queryRunner.manager
        .createQueryBuilder()
        .update(MerchantAisleCategory);
      if (oldPosition < merchantAisle.position) {
        ajPromise
          .set({ position: () => 'position - 1' })
          .where('position <= :position', { position: merchantAisle.position })
          .andWhere('position > :oldPosition', { oldPosition });
      } else {
        ajPromise
          .set({ position: () => 'position + 1' })
          .where('position >= :position', { position: merchantAisle.position })
          .andWhere('position < :oldPosition', { oldPosition });
        await Promise.all([ajPromise, updatePromise]);
      }
      await Promise.all([ajPromise.execute(), updatePromise]);
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      this.log.error(error);
      throw error;
    } finally {
      await queryRunner.release();
    }

    return `This action updates a categoryAisleAdmin`;
  }

  async remove(realtion: Partial<MerchantAisleCategory>) {
    return await this.categoryAisleAdminRepository.update(
      {
        merchantId: realtion.merchantId,
        aisleId: realtion.aisleId,
        categoryId: realtion.categoryId,
      },
      { active: false },
    );
  }
}
