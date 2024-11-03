import {
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { QueryFailedError, Repository } from 'typeorm';
import { MerchantOwner } from '../../data-base/entity/merchant-owner.entity';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';
import { Merchant } from '../../data-base/entity/merchant.entity';

@Injectable()
export class MerchantAdminService {
  private readonly log = new Logger(MerchantAdminService.name);

  constructor(
    @Inject(DatabaseDiTokens.MERCHANT_REPOSITORY)
    private readonly merchantRepositoty: Repository<Merchant>,
    @Inject(DatabaseDiTokens.MERCHANT_OWNER_REPOSITORY)
    private readonly merchantOwnerRepository: Repository<MerchantOwner>,
  ) {}

  async create(createMerchantAdminDto: Partial<Merchant>, uid: string) {
    try {
      const merchantOwner = await this.merchantOwnerRepository.findOne({
        where: { userProviderId: uid },
      });
      if (!merchantOwner) {
        throw new NotFoundException('Merchant owner not found');
      }
      const merchant = await this.merchantRepositoty.save(
        this.merchantRepositoty.create({
          ...createMerchantAdminDto,
          owner: merchantOwner,
        }),
      );
      return { id: merchant.merchantId };
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (
          error.message.includes(
            'duplicate key value violates unique constraint',
          )
        ) {
          throw new ConflictException('Merchant Uri já cadastrado');
        }
        this.log.error(error);
        throw error;
      }
      this.log.error(error);
      throw error;
    }
  }

  async findAll(uid: string) {
    const merchants = await this.merchantRepositoty.find({
      where: { owner: { userProviderId: uid } },
    });
    return merchants.map((m) => ({
      merchantId: m.merchantId,
      merchantName: m.merchantName,
      merchantUri: m.merchantUri,
    }));
  }

  findOne(id: number) {
    try {
      const merchant = this.merchantRepositoty.findOneOrFail({
        where: { merchantId: id },
        relations: {
          aisles: true,
        },
      });
      return merchant;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (error.message.includes('violates unique constraint')) {
          throw new NotFoundException('Merchant not found');
        }
        this.log.error(error);
        throw error;
      }
      this.log.error(error);
      throw error;
    }
  }

  async update(
    id: number,
    uid: string,
    updateMerchantAdminDto: Partial<Merchant>,
  ) {
    try {
      const result = await this.merchantRepositoty.update(
        { merchantId: id, owner: { userProviderId: uid } },
        updateMerchantAdminDto,
      );
      if (result.affected === 0) {
        throw new NotFoundException('Merchant not found');
      }
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (error.message.includes('violates unique constraint')) {
          throw new NotFoundException('Merchant not found');
        }
      }
      throw error;
    }
  }
}
