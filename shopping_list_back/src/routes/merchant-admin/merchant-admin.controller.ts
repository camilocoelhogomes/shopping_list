import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Headers,
} from '@nestjs/common';
import { MerchantAdminService } from './merchant-admin.service';
import { Merchant } from './entities/merchant.entity';

@Controller('admin/merchant')
export class MerchantAdminController {
  constructor(private readonly merchantAdminService: MerchantAdminService) {}

  @Post()
  create(
    @Headers('uid') uid: string,
    @Body() createMerchantAdminDto: Partial<Merchant>,
  ) {
    return this.merchantAdminService.create(createMerchantAdminDto, uid);
  }

  @Get()
  findAll(@Headers('uid') uid: string) {
    return this.merchantAdminService.findAll(uid);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.merchantAdminService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Headers('uid') uid: string,
    @Body() updateMerchantAdminDto: Partial<Merchant>,
  ) {
    return this.merchantAdminService.update(+id, uid, updateMerchantAdminDto);
  }
}
