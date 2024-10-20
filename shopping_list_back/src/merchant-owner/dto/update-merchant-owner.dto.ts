import { PartialType } from '@nestjs/swagger';
import { CreateMerchantOwnerDto } from './create-merchant-owner.dto';

export class UpdateMerchantOwnerDto extends PartialType(CreateMerchantOwnerDto) {}
