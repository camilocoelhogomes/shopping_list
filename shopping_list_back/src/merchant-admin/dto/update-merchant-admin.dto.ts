import { PartialType } from '@nestjs/swagger';
import { CreateMerchantAdminDto } from './create-merchant-admin.dto';

export class UpdateMerchantAdminDto extends PartialType(CreateMerchantAdminDto) {}
