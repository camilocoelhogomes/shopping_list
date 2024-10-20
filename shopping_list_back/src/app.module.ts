import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { config } from 'process';
import { configuration } from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: `.env.${process.env.NODE_ENV}`,
    isGlobal: true,
    load: [configuration]
  }), HealthCheckModule, FirebaseModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
