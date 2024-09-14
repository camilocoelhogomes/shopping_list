import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import typeorm from './config/typeorm';
import { UsersModule } from './users/users.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    AuthModule,
    UsersModule,
    ShoppingListModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
