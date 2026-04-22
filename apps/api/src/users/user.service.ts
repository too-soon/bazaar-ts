import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../database/entity/user.entity';
import {
  SocialAccount,
  SocialProvider,
} from '../database/entity/social-account.entity';

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
    const socialAccountObj = await this.socialAccountsRepository.findOne({
      where: { provider: profile.provider, providerId: profile.providerId },
      relations: ['user'],
    });

    if (socialAccountObj) {
      return socialAccountObj.user;
    }

    let user = await this.usersRepository.findOne({
      where: { email: profile.email },
    });

    if (!user) {
      user = this.usersRepository.create({ email: profile.email });
      user = await this.usersRepository.save(user);
    }

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
