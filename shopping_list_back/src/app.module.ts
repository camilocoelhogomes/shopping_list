import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { configuration } from './config/configuration';
import { MerchantOwnerModule } from './merchant-owner/merchant-owner.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
      isGlobal: true,
      load: [configuration],
    }),
    HealthCheckModule,
    FirebaseModule,
    MerchantOwnerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
