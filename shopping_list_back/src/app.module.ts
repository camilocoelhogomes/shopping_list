import { Module } from '@nestjs/common';
import { HealthCheckModule } from './health-check/health-check.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseModule } from './firebase/firebase.module';
import { configuration } from './config/configuration';
import { MerchantOwnerModule } from './routes/merchant-owner/merchant-owner.module';
import { DataBaseModule } from './data-base/data-base.module';
import { MerchantAdminModule } from './routes/merchant-admin/merchant-admin.module';
import { AisleAdminModule } from './routes/aisle-admin/aisle-admin.module';
import { MiddlewrersModule } from './middlewrers/middlewrers.module';
import { ProductCategoryModule } from './routes/product-category-admin/product-category.module';
import { CategoryAisleAdminModule } from './routes/category-aisle-admin/category-aisle-admin.module';

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
    MiddlewrersModule,
    ProductCategoryModule,
    CategoryAisleAdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
