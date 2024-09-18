import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UserEntity } from '../users/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserEntity> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const passwordResult = await compare(pass, user.password);
    if (!passwordResult) {
      throw new Error('Password is incorrect');
    }
    return user;
  }

  async generateToken(user: UserEntity): Promise<string> {
    return this.jwtService.sign({
      id: user.id,
      email: user.email,
      name: user.username,
    });
  }
}
