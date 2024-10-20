import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  Logger,
} from '@nestjs/common';
import { MerchantOwnerService } from './merchant-owner.service';
import { UpdateMerchantOwnerDto } from './dto/update-merchant-owner.dto';

@Controller('merchant-owner')
export class MerchantOwnerController {

  private readonly log = new Logger(MerchantOwnerController.name);
  constructor(private readonly merchantOwnerService: MerchantOwnerService) { }

  @Get()
  findOne(@Headers('uid') id: string) {
    this.log.debug(`uid: ${id}`);
    return this.merchantOwnerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMerchantOwnerDto: UpdateMerchantOwnerDto,
  ) {
    return this.merchantOwnerService.update(+id, updateMerchantOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.merchantOwnerService.remove(+id);
  }
}
