import { Injectable } from '@nestjs/common';
import { CreateCategoryAisleAdminDto } from './dto/create-category-aisle-admin.dto';
import { UpdateCategoryAisleAdminDto } from './dto/update-category-aisle-admin.dto';

@Injectable()
export class CategoryAisleAdminService {
  create(createCategoryAisleAdminDto: CreateCategoryAisleAdminDto) {
    return 'This action adds a new categoryAisleAdmin';
  }

  findAll() {
    return `This action returns all categoryAisleAdmin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryAisleAdmin`;
  }

  update(id: number, updateCategoryAisleAdminDto: UpdateCategoryAisleAdminDto) {
    return `This action updates a #${id} categoryAisleAdmin`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryAisleAdmin`;
  }
}
