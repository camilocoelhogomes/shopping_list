import { Body, Controller, Get, HttpCode, Post } from "@nestjs/common";
import { ShoppingItem } from "src/domain/ShoppingItem";

@Controller('shopping_item')
export class ShoppingItemController{

    private readonly shoppingList: ShoppingItem[] = []
    
    @Post()
    @HttpCode(201)
    async createShpppingItem(@Body() shoppingItem: ShoppingItem):Promise<{id:number}>{
        shoppingItem.id = this.shoppingList.length;
        this.shoppingList.push(shoppingItem)
        return {id:shoppingItem.id}
    }

    @Get()
    @HttpCode(200)
    async findAllShoppingList():Promise<ShoppingItem[]>{
        return this.shoppingList;
    }
}