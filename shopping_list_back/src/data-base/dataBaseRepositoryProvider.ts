import { Provider } from '@nestjs/common';
import { DatabaseDiTokens } from './DatabaseDiTokens';
import { DataSource } from 'typeorm';
import { Merchant } from '../routes/merchant-admin/entities/merchant.entity';
import { MerchantOwner } from '../routes/merchant-owner/entities/merchant-owner.entity';

export const dataBaseRepositoryProvider: Provider[] = [
  {
    provide: DatabaseDiTokens.MERCHANT_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Merchant),
    inject: [DatabaseDiTokens.DATA_SOURCE],
  },
  {
    provide: DatabaseDiTokens.MERCHANT_OWNER_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(MerchantOwner),
    inject: [DatabaseDiTokens.DATA_SOURCE],
  },
];
