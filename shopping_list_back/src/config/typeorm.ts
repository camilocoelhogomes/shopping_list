import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { ShoppingListEntity } from '../shopping-list/shopping-list.entity';
import { UserEntity } from '../users/user.entity';

import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  //host: `db`,
  host: `localhost`,
  port: `5432`,
  username: `admin`,
  password: `admin`,
  database: `db`,
  entities: [UserEntity, ShoppingListEntity],
  //migrations: ['migrations/*{.ts,.js}'],
  //autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      try {
        return connectionSource.initialize();
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
];
