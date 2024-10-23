import { Provider } from '@nestjs/common';
import { MerchantOwner } from './entities/merchant-owner.entity';
import { MerchantOwnerDiTokens } from './merchant-owner.ditokens';
import { DatabaseDiTokens } from '../data-base/DatabaseDiTokens';
import { DataSource } from 'typeorm';

export const merchantOwnerProviders: Provider[] = [
  {
    provide: MerchantOwnerDiTokens.MERCHANT_OWNER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(MerchantOwner),
    inject: [DatabaseDiTokens.DATA_SOURCE],
  },
];
