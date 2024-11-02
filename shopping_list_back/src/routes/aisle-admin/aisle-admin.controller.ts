import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { AisleAdminService } from './aisle-admin.service';
import { Aisle } from '../../data-base/entity/aisle.entity';
import { DatabaseDiTokens } from '../../data-base/DatabaseDiTokens';

@Controller('admin/merchant/:merchantId/aisle')
export class AisleAdminController {
  constructor(private readonly aisleAdminService: AisleAdminService) { }

  @Post()
  create(@Body() aisle: Partial<Aisle>, @Param('merchantId') merchantId: string) {
    return this.aisleAdminService.create({ ...aisle, merchantId: +merchantId });
  }

  @Get()
  findAll() {
    return this.aisleAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Param('merchantId') merchantId: string) {
    return this.aisleAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAisleAdminDto: Partial<Aisle>) {
    return this.aisleAdminService.update(+id, updateAisleAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aisleAdminService.remove(+id);
  }
}
