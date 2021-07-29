import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  @Post('/register')
  signUp(@Body() user: CreateUserDto): string {
    return `Welcome ${user.name}!`;
  }
  @Post('/login')
  signIn() {
    return 'Auth';
  }
}
