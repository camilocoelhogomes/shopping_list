import { Injectable } from '@nestjs/common';
import { Aisle } from '../../data-base/entity/aisle.entity';

@Injectable()
export class AisleAdminService {
  create(createAisleAdminDto: Partial<Aisle>) {
    return 'This action adds a new aisleAdmin';
  }

  findAll() {
    return `This action returns all aisleAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} aisleAdmin`;
  }

  update(id: number, updateAisleAdminDto: Partial<Aisle>) {
    return `This action updates a #${id} aisleAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} aisleAdmin`;
  }
}
