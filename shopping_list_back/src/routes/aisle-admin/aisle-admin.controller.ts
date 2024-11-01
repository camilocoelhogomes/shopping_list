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

@Controller('aisle-admin')
export class AisleAdminController {
  constructor(private readonly aisleAdminService: AisleAdminService) {}

  @Post()
  create(@Body() createAisleAdminDto: Partial<Aisle>) {
    return this.aisleAdminService.create(createAisleAdminDto);
  }

  @Get()
  findAll() {
    return this.aisleAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
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
