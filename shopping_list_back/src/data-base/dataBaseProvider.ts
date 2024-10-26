import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DatabaseDiTokens } from './DatabaseDiTokens';
import { ConfigService } from '@nestjs/config';
import { MerchantOwner } from '../merchant-owner/entities/merchant-owner.entity';

export const databaseProvider: Provider[] = [
  {
    provide: DatabaseDiTokens.DATA_SOURCE,
    useFactory: async (configService: ConfigService) => {
      const dbConfig = configService.get('dbConfig');
      const dataSource: DataSource = new DataSource({
        ...dbConfig,
        entities: [MerchantOwner],
      });

      await dataSource.initialize();
      return dataSource;
    },
    inject: [ConfigService],
  },
];
