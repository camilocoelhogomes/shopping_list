import {
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { MerchantOwner } from '../../data-base/entity/merchant-owner.entity';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';

@Injectable()
export class MerchantOwnerService {
  private readonly logger = new Logger(MerchantOwnerService.name);

  constructor(
    @Inject(DatabaseDiTokens.MERCHANT_OWNER_REPOSITORY)
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
    try {
      return await this.merchantouOwnerRepository.save(merchantOwner);
    } catch (error) {
      this.logger.error(error);
      if (error.code === '23505') {
        throw new ConflictException('Usuário já cadastrado');
      }
    }
  }

  findOne(userId: string) {
    try {
      return this.merchantouOwnerRepository.findOneByOrFail({
        userProviderId: userId,
      });
    } catch (error) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }

  async update(updateMerchantOwnerDto: Partial<MerchantOwner>) {
    await this.merchantouOwnerRepository.update(
      { userProviderId: updateMerchantOwnerDto.userProviderId },
      updateMerchantOwnerDto,
    );
    return;
  }
}
