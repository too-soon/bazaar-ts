import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

export enum SocialProvider {
  GOOGLE = 'google',
}

@Entity('social_accounts')
export class SocialAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: SocialProvider;

  @Column({ unique: true })
  providerId: string;

  @ManyToOne(() => User, (user) => user.socialAccounts)
  user: User;
}
