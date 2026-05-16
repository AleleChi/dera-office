import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

interface RegisterBody {
  email: string;
  password: string;
  companyName?: string;
  firstName?: string;
  lastName?: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  async register(@Body() body: RegisterBody) {
    return this.authService.register({
      email: body.email,
      password: body.password,
      companyName: body.companyName,
      firstName: body.firstName,
      lastName: body.lastName,
    });
  }
}
