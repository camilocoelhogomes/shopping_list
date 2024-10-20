import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MerchantOwnerService } from './merchant-owner.service';
import { UpdateMerchantOwnerDto } from './dto/update-merchant-owner.dto';

@Controller('merchant-owner')
export class MerchantOwnerController {
  constructor(private readonly merchantOwnerService: MerchantOwnerService) { }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchantOwnerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMerchantOwnerDto: UpdateMerchantOwnerDto) {
    return this.merchantOwnerService.update(+id, updateMerchantOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchantOwnerService.remove(+id);
  }
}
