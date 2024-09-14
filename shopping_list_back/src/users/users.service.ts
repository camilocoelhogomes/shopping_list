import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      const newUser = new UserEntity();
      newUser.email = createUserDto.email;
      newUser.password = createUserDto.password;
      newUser.username = createUserDto.name;
      newUser.createdBy = createUserDto.email;
      newUser.lastChangedBy = createUserDto.email;
      await this.userRepository.save(newUser);
    } catch (error) {
      console.error(error.message);
      throw error;
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
