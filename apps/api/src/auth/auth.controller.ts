import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { User } from 'database/entity/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService,
  ) {}

  @Get('google')
  @UseGuards(AuthGuard('google'))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(
    @Req() req: Request & { user: User },
    @Res() res: Response,
  ) {
    const { access_token } = this.authService.login(req.user);
    const siteUrl = this.configService.get<string>('SITE_URL');

    res.cookie('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // TODO: change to 'strict' when using https
    });

    res.redirect(`${siteUrl}/auth-success`);
  }

  @Get('logout')
  logout(@Res() res: Response) {
    const siteUrl = this.configService.get<string>('SITE_URL');

    res.clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // TODO: change to 'strict' when using https
    });

    res.redirect(`${siteUrl}/logout`);
  }
}
