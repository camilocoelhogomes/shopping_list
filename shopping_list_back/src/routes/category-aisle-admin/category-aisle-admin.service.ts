import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
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
        await queryRunner.manager
          .createQueryBuilder()
          .update(MerchantAisleCategory)
          .set({ position: () => 'position + 1' })
          .where('position >= :position', { position: merchantAisle.position })
          .execute();
        const result = await queryRunner.manager.save(m);
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
      throw new NotFoundException('CategoryAisleAdmin not found');
    }
    const oldPosition = merchantCategory.position;
    if (oldPosition === merchantAisle.position) {
      return;
    }

    const queryRunner =
      this.categoryAisleAdminRepository.manager.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      if (oldPosition < merchantAisle.position) {
        const ajPromise = queryRunner.manager
          .createQueryBuilder()
          .update(MerchantAisleCategory)
          .set({ position: () => 'position - 1' })
          .where('position <= :position', { position: merchantAisle.position })
          .andWhere('position > :oldPosition', { oldPosition })
          .execute();
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
        await Promise.all([ajPromise, updatePromise]);
      } else {
        const ajPromise = queryRunner.manager
          .createQueryBuilder()
          .update(MerchantAisleCategory)
          .set({ position: () => 'position + 1' })
          .where('position >= :position', { position: merchantAisle.position })
          .andWhere('position < :oldPosition', { oldPosition })
          .execute();
        const updatePromise = await queryRunner.manager.update(
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
        await Promise.all([ajPromise, updatePromise]);
      }
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
