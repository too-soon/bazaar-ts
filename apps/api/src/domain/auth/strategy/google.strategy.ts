import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'domain/user/user.service';
import { SocialProvider } from 'database/entity/social-account.entity';

interface GoogleProfile {
  id: string;
  emails: { value: string; verified: boolean }[];
  name: { givenName: string; familyName: string };
  displayName: string;
  photos: { value: string }[];
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {
    super({
      clientID: configService.get<string>('GOOGLE_CLIENT_ID')!,
      clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET')!,
      callbackURL: `${configService.get<string>('API_URL')}/auth/google/callback`,
      scope: ['email', 'profile'],
    });
  }

  /**
   * @plans Once we add other auth strategies, we should cross check if the email from the provider matches an existing user and link the accounts if they do
   * @plans Once user is connected to a social provider, we should allow them to connect other providers as well from their profile page but not from the login flow to avoid account linking issues
   * @todo Handle errors properly and return appropriate messages to the client instead of just logging them
   * */
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: GoogleProfile,
    done: VerifyCallback,
  ): Promise<void> {
    const { emails, id, photos } = profile;
    const user = await this.userService.createProviderUser({
      email: emails[0].value,
      provider: SocialProvider.GOOGLE,
      providerId: id,
      image: photos?.[0]?.value,
    });
    done(null, user || false);
  }
}
