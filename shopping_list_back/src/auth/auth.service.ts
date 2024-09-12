import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthModel } from './auth.model';

@Injectable()
export class AuthService {
    private users: AuthModel[] = [];
    private idCounter = 1;
  
    createUser(username: string, email: string, password: string): AuthModel {
      const userExists = this.users.some(user => user.email === email);
      if (userExists) {
        throw new BadRequestException('User with this email already exists');
      }
  
      const newUser: AuthModel = {
        id: this.idCounter++,
        username,
        email,
        password,
      };
  
      this.users.push(newUser);
      return newUser;
    }
  
    loginUser(email: string, password: string): AuthModel {
      const user = this.users.find(user => user.email === email && user.password === password);
      if (!user) {
        throw new BadRequestException('Invalid credentials');
      }
      return user;
    }
}
