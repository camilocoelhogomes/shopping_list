import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Merchant } from './entities/merchant.entity';
import { MerchantAdminDiTokens } from './merchat-admin.ditokens';
import { Repository } from 'typeorm';
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
      const merchant = this.merchantRepositoty.create({
        ...createMerchantAdminDto,
        owner: merchantOwner,
      });
      return 'This action adds a new merchantAdmin';
    } catch (error) {
      this.log.error(error);
      throw error;
    }
  }

  findAll() {
    return `This action returns all merchantAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantAdmin`;
  }

  update(id: number, updateMerchantAdminDto: Partial<Merchant>) {
    return `This action updates a #${id} merchantAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantAdmin`;
  }
}
