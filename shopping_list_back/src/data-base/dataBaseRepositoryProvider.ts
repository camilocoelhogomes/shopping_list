import { Provider } from '@nestjs/common';
import { DatabaseDiTokens } from './DatabaseDiTokens';
import { DataSource } from 'typeorm';
import { MerchantOwner } from './entity/merchant-owner.entity';
import { Merchant } from './entity/merchant.entity';
import { Aisle } from './entity/aisle.entity';

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
  {
    provide: DatabaseDiTokens.AISLE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Aisle),
    inject: [DatabaseDiTokens.DATA_SOURCE],
  },
];
