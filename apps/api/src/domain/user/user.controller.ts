import { Controller, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request, Response } from 'express';

@Controller('users')
export class UserController {
  constructor() {}

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  getMe(@Req() req: Request) {
    /** @research are we able to trust the user data from request body? */
    return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('logout')
  logout(@Res() res: Response) {
    res.clearCookie('access_token');
    res.status(200).json({ message: 'Logged out successfully' });
  }
}
