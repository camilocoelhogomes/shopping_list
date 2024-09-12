import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthModel } from './auth.model';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() createUserDto: { username: string; email: string; password: string }): AuthModel {
      const { username, email, password } = createUserDto;
      return this.authService.createUser(username, email, password);
    }
  
    @Post('login')
    login(@Body() loginUserDto: { email: string; password: string }): AuthModel {
      const { email, password } = loginUserDto;
      return this.authService.loginUser(email, password);
    }
}
