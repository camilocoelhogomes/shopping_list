import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { UserEntity } from 'src/users/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: `localhost`,
  port: `5432`,
  username: `admin`,
  password: `admin`,
  database: `db`,
  entities: [UserEntity],
  migrations: ['src/migrations/*{.ts,.js}'],
  //autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return connectionSource.initialize();
    },
  },
];
