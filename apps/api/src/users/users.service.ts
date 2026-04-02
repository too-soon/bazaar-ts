import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import {
  SocialAccount,
  SocialProvider,
} from './entities/social-account.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(SocialAccount)
    private socialAccountsRepository: Repository<SocialAccount>,
  ) {}

  async findOrCreateProviderUser(profile: {
    email: string;
    provider: SocialProvider;
    providerId: string;
  }) {
    // 1. Check if the social account exists
    const socialAccountObj = await this.socialAccountsRepository.findOne({
      where: { provider: profile.provider, providerId: profile.providerId },
      relations: ['user'],
    });

    if (socialAccountObj) {
      return socialAccountObj.user;
    }

    // 2. Check if user exists by email
    let user = await this.usersRepository.findOne({
      where: { email: profile.email },
    });

    if (!user) {
      // 3. Create new user if doesn't exist
      user = this.usersRepository.create({ email: profile.email });
      user = await this.usersRepository.save(user);
    }

    // 4. Create the social account link
    const newSocialAccount = this.socialAccountsRepository.create({
      provider: profile.provider,
      providerId: profile.providerId,
      user,
    });
    await this.socialAccountsRepository.save(newSocialAccount);

    return user;
  }

  async findById(id: string) {
    return this.usersRepository.findOneBy({ id });
  }
}
