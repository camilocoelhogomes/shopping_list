import { Module } from '@nestjs/common';
import { databaseProvider } from './dataBaseProvider';
import { dataBaseRepositoryProvider } from './dataBaseRepositoryProvider';

@Module({
  providers: [...databaseProvider, ...dataBaseRepositoryProvider],
  exports: [...dataBaseRepositoryProvider],
})
export class DataBaseModule {}
