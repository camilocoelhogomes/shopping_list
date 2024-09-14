import { Module } from '@nestjs/common';
import { databaseProviders } from './typeorm';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
