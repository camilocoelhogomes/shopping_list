import {
  Controller,
  Get,
  Body,
  Patch,
  Headers,
  Logger,
  Post,
} from '@nestjs/common';
import { MerchantOwnerService } from './merchant-owner.service';
import { MerchantOwner } from './entities/merchant-owner.entity';

@Controller('admin/merchant-owner')
export class MerchantOwnerController {
  private readonly log = new Logger(MerchantOwnerController.name);
  constructor(private readonly merchantOwnerService: MerchantOwnerService) { }

  @Get()
  findOne(@Headers('uid') id: string) {
    return this.merchantOwnerService.findOne(id);
  }

  @Post()
  create(
    @Body() createMerchant: Partial<MerchantOwner>,
    @Headers('uid') uid: string,
  ) {
    return this.merchantOwnerService.create({
      ...createMerchant,
      userProviderId: uid,
    });
  }

  @Patch()
  update(
    @Headers('uid') uid: string,
    @Body() updateMerchantOwnerDto: Partial<MerchantOwner>,
  ) {
    return this.merchantOwnerService.update({
      ...updateMerchantOwnerDto,
      userProviderId: uid,
    });
  }

}
