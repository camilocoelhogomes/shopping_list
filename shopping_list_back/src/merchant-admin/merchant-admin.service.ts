import { Injectable } from '@nestjs/common';
import { CreateMerchantAdminDto } from './dto/create-merchant-admin.dto';
import { UpdateMerchantAdminDto } from './dto/update-merchant-admin.dto';

@Injectable()
export class MerchantAdminService {
  create(createMerchantAdminDto: CreateMerchantAdminDto) {
    return 'This action adds a new merchantAdmin';
  }

  findAll() {
    return `This action returns all merchantAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} merchantAdmin`;
  }

  update(id: number, updateMerchantAdminDto: UpdateMerchantAdminDto) {
    return `This action updates a #${id} merchantAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchantAdmin`;
  }
}
