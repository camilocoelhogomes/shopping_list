import { Injectable } from '@nestjs/common';
import { Merchant } from './entities/merchant.entity';


@Injectable()
export class MerchantAdminService {
  create(createMerchantAdminDto: Partial<Merchant>) {
    return 'This action adds a new merchantAdmin';
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
