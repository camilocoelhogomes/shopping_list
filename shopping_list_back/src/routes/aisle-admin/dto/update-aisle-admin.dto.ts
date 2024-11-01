import { PartialType } from '@nestjs/swagger';
import { CreateAisleAdminDto } from './create-aisle-admin.dto';

export class UpdateAisleAdminDto extends PartialType(CreateAisleAdminDto) {}
