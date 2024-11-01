import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AisleAdminService } from './aisle-admin.service';
import { CreateAisleAdminDto } from './dto/create-aisle-admin.dto';
import { UpdateAisleAdminDto } from './dto/update-aisle-admin.dto';

@Controller('aisle-admin')
export class AisleAdminController {
  constructor(private readonly aisleAdminService: AisleAdminService) {}

  @Post()
  create(@Body() createAisleAdminDto: CreateAisleAdminDto) {
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
  update(@Param('id') id: string, @Body() updateAisleAdminDto: UpdateAisleAdminDto) {
    return this.aisleAdminService.update(+id, updateAisleAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aisleAdminService.remove(+id);
  }
}
