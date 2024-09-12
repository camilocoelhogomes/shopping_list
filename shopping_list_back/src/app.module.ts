import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { ShoppingItemController } from './controller/shoppingItem.controller';

@Module({
  imports: [],
  controllers: [AppController, ShoppingItemController],
  providers: [AppService],
})
export class AppModule {}
