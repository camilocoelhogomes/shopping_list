import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(userEmail: string, pass: string): Promise<any> {
    try {
        const user = await this.usersService.findOne(userEmail);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    } catch (error) {
        return null;
    }

  }
}
