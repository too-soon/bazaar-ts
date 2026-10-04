import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'database/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  /** @todo @possibly Add more claims to the JWT payload */
  login(user: User) {
    const payload = { sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // verifyToken(token: string): { sub: string } | null {
  //   try {
  //     return this.jwtService.verify(token);
  //   } catch (e: unknown) {
  //     console.log(
  //       'Token verification failed:',
  //       e instanceof Error ? e.message : e,
  //     );
  //     return null;
  //   }
  // }
}
