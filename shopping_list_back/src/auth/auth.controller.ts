import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() req) {
    const { email, password } = req;
    return {
      token: await this.authService.validateUser(email, password),
    };
  }
}
