import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  async create(createUserDto: CreateUserDto):Promise<void> {
    try {
      const a = 3;
      const b = a + 2;
      console.log(JSON.stringify(createUserDto));
      console.log("User created successfully");
    } catch (error) {
      console.log("Error creating user");
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
