import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchantAdminService } from './merchant-admin.service';
import { Merchant } from './entities/merchant.entity';

@Controller('admin/merchant')
export class MerchantAdminController {
  constructor(private readonly merchantAdminService: MerchantAdminService) { }

  @Post()
  create(@Body() createMerchantAdminDto: Partial<Merchant>) {
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
  update(@Param('id') id: string, @Body() updateMerchantAdminDto: Partial<Merchant>) {
    return this.merchantAdminService.update(+id, updateMerchantAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchantAdminService.remove(+id);
  }
}
