import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryAisleAdminService } from './category-aisle-admin.service';
import { CreateCategoryAisleAdminDto } from './dto/create-category-aisle-admin.dto';
import { UpdateCategoryAisleAdminDto } from './dto/update-category-aisle-admin.dto';

@Controller('category-aisle-admin')
export class CategoryAisleAdminController {
  constructor(private readonly categoryAisleAdminService: CategoryAisleAdminService) {}

  @Post()
  create(@Body() createCategoryAisleAdminDto: CreateCategoryAisleAdminDto) {
    return this.categoryAisleAdminService.create(createCategoryAisleAdminDto);
  }

  @Get()
  findAll() {
    return this.categoryAisleAdminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryAisleAdminService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryAisleAdminDto: UpdateCategoryAisleAdminDto) {
    return this.categoryAisleAdminService.update(+id, updateCategoryAisleAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryAisleAdminService.remove(+id);
  }
}
