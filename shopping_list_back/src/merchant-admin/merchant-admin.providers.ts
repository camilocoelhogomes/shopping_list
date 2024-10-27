import { Provider } from '@nestjs/common';
import { MerchantAdminDiTokens } from './merchat-admin.ditokens';
import { DataSource } from 'typeorm';
import { DatabaseDiTokens } from '../data-base/DatabaseDiTokens';
import { MerchantOwner } from '../merchant-owner/entities/merchant-owner.entity';

export const merchantAdminProviders: Provider[] = [
  {
    provide: MerchantAdminDiTokens.MERCHANT_ADMIN_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(MerchantOwner),
    inject: [DatabaseDiTokens.DATA_SOURCE],
  },
];
