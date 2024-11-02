import { Inject, Injectable } from '@nestjs/common';
import { Aisle } from '../../data-base/entity/aisle.entity';
import { Repository } from 'typeorm';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';

@Injectable()
export class AisleAdminService {

  constructor(@Inject(DatabaseDiTokens.AISLE_REPOSITORY) private readonly aisleRepository: Repository<Aisle>) { }


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
