import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MerchantOwnerDiTokens } from './merchant-owner.ditokens';
import { MerchantOwner } from './entities/merchant-owner.entity';

@Injectable()
export class MerchantOwnerService {
  constructor(
    @Inject(MerchantOwnerDiTokens.MERCHANT_OWNER_REPOSITORY)
    private readonly merchantouOwnerRepository: Repository<MerchantOwner>,
  ) { }

  async create(createMerchantOwnerDto: Partial<MerchantOwner>) {
    const merchantOwner = new MerchantOwner();
    merchantOwner.email = createMerchantOwnerDto.email;
    merchantOwner.displayName = createMerchantOwnerDto.displayName;
    merchantOwner.documentNumber = createMerchantOwnerDto.documentNumber;
    merchantOwner.phoneNumber = createMerchantOwnerDto.phoneNumber;
    merchantOwner.title = createMerchantOwnerDto.title;
    merchantOwner.userProviderId = createMerchantOwnerDto.userProviderId;
    merchantOwner.preferredName = createMerchantOwnerDto.preferredName;
    return this.merchantouOwnerRepository.save(merchantOwner);
  }

  findAll() {
    return `This action returns all merchantOwner`;
  }

  findOne(userId: string) {
    return this.merchantouOwnerRepository.findOneByOrFail({
      userProviderId: userId,
    });
  }

  update(updateMerchantOwnerDto: Partial<MerchantOwner>) {
    return this.merchantouOwnerRepository.update(
      { userProviderId: updateMerchantOwnerDto.userProviderId },
      updateMerchantOwnerDto,
    );
  }
}
