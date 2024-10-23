import { Module } from '@nestjs/common';
import { databaseProvider } from './dataBaseProvider';

@Module({
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DataBaseModule { }
