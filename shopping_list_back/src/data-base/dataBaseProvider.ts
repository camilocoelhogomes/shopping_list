import { Provider } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { DatabaseDiTokens } from './DatabaseDiTokens';
import { ConfigService } from '@nestjs/config';

export const databaseProvider: Provider[] = [
  {
    provide: DatabaseDiTokens.DATA_SOURCE,
    useFactory: async (configService: ConfigService) => {
      const dbConfig = configService.get('dbConfig');
      const dataSource: DataSource = new DataSource(dbConfig);
      await dataSource.initialize();
      return dataSource;
    },
    inject: [ConfigService],
  },
];
