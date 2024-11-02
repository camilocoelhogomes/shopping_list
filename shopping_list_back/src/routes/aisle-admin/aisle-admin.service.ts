import {
  ConflictException,
  Inject,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Aisle } from '../../data-base/entity/aisle.entity';
import { Repository } from 'typeorm';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';

@Injectable()
export class AisleAdminService {
  private readonly log = new Logger(AisleAdminService.name);

  constructor(
    @Inject(DatabaseDiTokens.AISLE_REPOSITORY)
    private readonly aisleRepository: Repository<Aisle>,
  ) { }

  async create(aisle: Partial<Aisle>) {
    const verifyAisle = await this.aisleRepository.findOne({
      where: [
        {
          merchantId: aisle.merchantId,
          aisleNumber: aisle.aisleNumber,
          active: true,
        },
        { merchantId: aisle.merchantId, aisleName: aisle.aisleName, active: true },
      ],
    });
    if (verifyAisle) {
      throw new ConflictException('Aisle already exists');
    }
    return await this.aisleRepository.save(this.aisleRepository.create(aisle));
  }

  async findAll(merchantId: number) {
    return await this.aisleRepository.find({
      where: { merchantId, active: true },
      order: { aisleNumber: 'ASC' },
    });
  }

  async findOne(id: number, merchantId: number) {
    return await this.aisleRepository.findOne({
      where: { aisleId: id, merchantId, active: true },
    });
  }

  async update(updateAisleAdminDto: Partial<Aisle>) {

    const result = await this.aisleRepository.update(
      {
        aisleId: updateAisleAdminDto.aisleId,
        merchantId: updateAisleAdminDto.merchantId,
      },
      updateAisleAdminDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException('Aisle not found');
    }
  }

  async remove(id: number) {
    await this.aisleRepository.update(id, { active: false });
  }
}
