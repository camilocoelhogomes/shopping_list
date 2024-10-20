import { Injectable } from '@nestjs/common';
import { CreateMerchantOwnerDto } from './dto/create-merchant-owner.dto';
import { UpdateMerchantOwnerDto } from './dto/update-merchant-owner.dto';

@Injectable()
export class MerchantOwnerService {
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
