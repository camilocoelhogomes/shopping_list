import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { Aisle } from '../../data-base/entity/aisle.entity';
import { Repository } from 'typeorm';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';

@Injectable()
export class AisleAdminService {
  private readonly log = new Logger(AisleAdminService.name);

  constructor(
    @Inject(DatabaseDiTokens.AISLE_REPOSITORY)
    private readonly aisleRepository: Repository<Aisle>,
  ) {}

  async create(aisle: Partial<Aisle>) {
    const verifyAisle = await this.aisleRepository.findOne({
      where: [
        {
          merchantId: aisle.merchantId,
          aisleNumber: aisle.aisleNumber,
        },
        { merchantId: aisle.merchantId, aisleName: aisle.aisleName },
      ],
    });
    if (verifyAisle) {
      throw new ConflictException('Aisle already exists');
    }
    return await this.aisleRepository.save(this.aisleRepository.create(aisle));
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
