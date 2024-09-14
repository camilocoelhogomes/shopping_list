import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
    async findOne(username: string): Promise<UserEntity> {
        throw new Error('Method not implemented.');
    }
}
