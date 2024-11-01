import { Injectable } from '@nestjs/common';
import { CreateAisleAdminDto } from './dto/create-aisle-admin.dto';
import { UpdateAisleAdminDto } from './dto/update-aisle-admin.dto';

@Injectable()
export class AisleAdminService {
  create(createAisleAdminDto: CreateAisleAdminDto) {
    return 'This action adds a new aisleAdmin';
  }

  findAll() {
    return `This action returns all aisleAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aisleAdmin`;
  }

  update(id: number, updateAisleAdminDto: UpdateAisleAdminDto) {
    return `This action updates a #${id} aisleAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} aisleAdmin`;
  }
}
