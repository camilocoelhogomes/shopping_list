import { Provider } from '@nestjs/common';
import { MerchantOwner } from './entities/merchant-owner.entity';
import { MerchantOwnerDiTokens } from './merchant-owner.ditokens';
import { DatabaseDiTokens } from '../data-base/DatabaseDiTokens';

export const merchantOwnerProviders: Provider[] = [
  {
    provide: MerchantOwnerDiTokens.MERCHANT_OWNER_REPOSITORY,
    useFactory: (dataSource) => dataSource.repository(MerchantOwner),
    inject: [DatabaseDiTokens.DATA_SOURCE],
  },
];
