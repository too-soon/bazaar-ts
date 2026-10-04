import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role, User } from '../../database/entity/user.entity';
import {
  SocialAccount,
  SocialProvider,
} from '../../database/entity/social-account.entity';

interface SocialProfile {
  email: string;
  provider: SocialProvider;
  /** User ID on the social provider side */
  providerId: string;
  /* @todo create a template string type for URL */
  image?: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(SocialAccount)
    private socialAccountsRepository: Repository<SocialAccount>,
  ) {}

  async findById(
    id: string,
    relations: string[] = ['socialAccounts', 'associations', 'addresses'],
  ) {
    return await this.usersRepository.findOne({
      where: { id },
      relations,
    });
  }

  async findUserByProvider(
    { provider, providerId }: SocialProfile,
    relations: string[] = ['user'],
  ) {
    const socialAccount = await this.socialAccountsRepository.findOne({
      where: { provider, providerId },
      relations,
    });

    return socialAccount ? socialAccount.user : null;
  }

  async createUser() {
    let user = this.usersRepository.create();
    user = await this.usersRepository.save(user);
    return user;
  }

  async createSocialAccount(
    { provider, providerId, email, image }: SocialProfile,
    user: User,
  ) {
    const socialAccount = this.socialAccountsRepository.create({
      provider,
      providerId,
      email,
      image,
      user,
    });

    return await this.socialAccountsRepository.save(socialAccount);
  }

  async createProviderUser(profile: SocialProfile) {
    const socialAccountUser = await this.findUserByProvider(profile);

    if (socialAccountUser) {
      return socialAccountUser;
    }

    const user = await this.createUser();
    await this.createSocialAccount(profile, user);

    return await this.findById(user.id);
  }

  async assignRoleByEmail(email: string, role: Role) {
    const user = await this.usersRepository.findOne({
      where: { socialAccounts: { email } },
      relations: ['socialAccounts'],
    });

    if (!user) {
      throw new Error(`User with email ${email} not found`);
    }

    user.role = role;
    await this.usersRepository.save(user);
  }
}
