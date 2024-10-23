import { Inject, Injectable } from '@nestjs/common';
import { CreateMerchantOwnerDto } from './dto/create-merchant-owner.dto';
import { UpdateMerchantOwnerDto } from './dto/update-merchant-owner.dto';
import { DataSource, Repository } from 'typeorm';
import { MerchantOwnerDiTokens } from './MerchantOwnerDiTokens';
import { MerchantOwner } from './entities/merchant-owner.entity';

@Injectable()
export class MerchantOwnerService {

  constructor(@Inject(MerchantOwnerDiTokens.MERCHANT_OWNER_REPOSITORY) private readonly merchantouOwnerRepository: Repository<MerchantOwner>) { }

  create(createMerchantOwnerDto: CreateMerchantOwnerDto) {
    return 'This action adds a new merchantOwner';
  }

  findAll() {
    return `This action returns all merchantOwner`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantOwner`;
  }

  update(id: number, updateMerchantOwnerDto: UpdateMerchantOwnerDto) {
    return `This action updates a #${id} merchantOwner`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantOwner`;
  }
}
