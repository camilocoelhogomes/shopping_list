import { ConflictException, Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Equal, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly log = new Logger(UsersService.name);

  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    try {
      this.log.log(`Creating user ${JSON.stringify(createUserDto)}`);
      if (await this.findByEmail(createUserDto.email)) {
        throw new ConflictException('User already exists');
      }
      const newUser = new UserEntity();
      newUser.email = createUserDto.email;
      newUser.password = await bcrypt.hash(createUserDto.password, 10);
      newUser.username = createUserDto.name;
      newUser.createdBy = createUserDto.email;
      newUser.lastChangedBy = createUserDto.email;
      await this.userRepository.save(newUser);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  async findByEmail(email: string): Promise<UserEntity> {
    return await this.userRepository.findOneBy({
      email: Equal(email),
      isActive: Equal(true),
    });
  }
}
