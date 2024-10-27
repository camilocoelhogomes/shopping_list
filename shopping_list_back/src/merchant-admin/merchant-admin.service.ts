import {
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Merchant } from './entities/merchant.entity';
import { MerchantAdminDiTokens } from './merchat-admin.ditokens';
import { QueryFailedError, Repository } from 'typeorm';
import { MerchantOwner } from '../merchant-owner/entities/merchant-owner.entity';
import { MerchantOwnerDiTokens } from '../merchant-owner/merchant-owner.ditokens';

@Injectable()
export class MerchantAdminService {
  private readonly log = new Logger(MerchantAdminService.name);

  constructor(
    @Inject(MerchantAdminDiTokens.MERCHANT_ADMIN_REPOSITORY)
    private readonly merchantRepositoty: Repository<Merchant>,
    @Inject(MerchantOwnerDiTokens.MERCHANT_OWNER_REPOSITORY)
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

  async update(id: number, updateMerchantAdminDto: Partial<Merchant>) {
    try {
      return await this.merchantRepositoty.update(
        { merchantId: id },
        updateMerchantAdminDto,
      );
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (error.message.includes('violates unique constraint')) {
          throw new NotFoundException('Merchant not found');
        }
        this.log.error(error);
        throw error;
      }
      this.log.error(error);
    }
  }
}
