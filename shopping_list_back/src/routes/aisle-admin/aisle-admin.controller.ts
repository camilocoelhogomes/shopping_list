import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AisleAdminService } from './aisle-admin.service';
import { Aisle } from '../../data-base/entity/aisle.entity';

@Controller('admin/merchant/:merchantId/aisle')
export class AisleAdminController {
  constructor(private readonly aisleAdminService: AisleAdminService) {}

  @Post()
  create(
    @Body() aisle: Partial<Aisle>,
    @Param('merchantId') merchantId: string,
  ) {
    return this.aisleAdminService.create({ ...aisle, merchantId: +merchantId });
  }

  @Get()
  findAll(@Param('merchantId') merchantId: string) {
    return this.aisleAdminService.findAll(+merchantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('merchantId') merchantId: string) {
    return this.aisleAdminService.findOne(+id, +merchantId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAisleAdminDto: Partial<Aisle>,
    @Param('merchantId') merchantId: string,
  ) {
    return this.aisleAdminService.update({
      ...updateAisleAdminDto,
      aisleId: +id,
      merchantId: +merchantId,
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aisleAdminService.remove(+id);
  }
}
