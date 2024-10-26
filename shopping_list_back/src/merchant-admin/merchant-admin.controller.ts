import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchantAdminService } from './merchant-admin.service';
import { CreateMerchantAdminDto } from './dto/create-merchant-admin.dto';
import { UpdateMerchantAdminDto } from './dto/update-merchant-admin.dto';

@Controller('admin/merchant')
export class MerchantAdminController {
  constructor(private readonly merchantAdminService: MerchantAdminService) { }

  @Post()
  create(@Body() createMerchantAdminDto: CreateMerchantAdminDto) {
    return this.merchantAdminService.create(createMerchantAdminDto);
  }

  @Get()
  findAll() {
    return this.merchantAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchantAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchantAdminDto: UpdateMerchantAdminDto) {
    return this.merchantAdminService.update(+id, updateMerchantAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchantAdminService.remove(+id);
  }
}
