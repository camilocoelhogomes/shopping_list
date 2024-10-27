import { Provider } from '@nestjs/common';
import { MerchantAdminDiTokens } from './merchat-admin.ditokens';
import { DataSource } from 'typeorm';
import { DatabaseDiTokens } from '../data-base/DatabaseDiTokens';
import { Merchant } from './entities/merchant.entity';

export const merchantAdminProviders: Provider[] = [
  {
    provide: MerchantAdminDiTokens.MERCHANT_ADMIN_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Merchant),
    inject: [DatabaseDiTokens.DATA_SOURCE],
  },
];
