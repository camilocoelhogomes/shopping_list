import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { configuration } from './config/configuration';
import { MerchantOwnerModule } from './routes/merchant-owner/merchant-owner.module';
import { DataBaseModule } from './data-base/data-base.module';
import { MerchantAdminModule } from './routes/merchant-admin/merchant-admin.module';
import { AisleAdminModule } from './aisle-admin/aisle-admin.module';

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
    DataBaseModule,
    MerchantAdminModule,
    AisleAdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
