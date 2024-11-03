import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DatabaseDiTokens } from './DatabaseDiTokens';
import { ConfigService } from '@nestjs/config';
import { MerchantOwner } from './entity/merchant-owner.entity';
import { Merchant } from './entity/merchant.entity';
import { Aisle } from './entity/aisle.entity';
import { ProductCategory } from './entity/product-category.entity';

export const databaseProvider: Provider[] = [
  {
    provide: DatabaseDiTokens.DATA_SOURCE,
    useFactory: async (configService: ConfigService) => {
      const dbConfig = configService.get('dbConfig');
      const dataSource: DataSource = new DataSource({
        ...dbConfig,
        entities: [MerchantOwner, Merchant, Aisle, ProductCategory],
      });

      await dataSource.initialize();
      return dataSource;
    },
    inject: [ConfigService],
  },
];
