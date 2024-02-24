import { Controller, Post, Body, Res, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin-auth.dto';
import { Response } from 'express';
import { SignUpDto } from './dto/signup-auth.dto';
import { UserIdRequest } from 'src/logger.middleware';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("/sign-in")
  signin(@Body() body: SignInDto, @Res() res: Response) {
    return this.authService.signin(body, res);
  }

  @Post("/sign-up")
  signup(@Body() body: SignUpDto, @Res() res: Response) {
    return this.authService.signup(body, res);
  }

  @Get("/get-profile")
  getProfile(@Req() req: UserIdRequest, @Res() res: Response) {
    return this.authService.getProfile(req, res);
  }

}
