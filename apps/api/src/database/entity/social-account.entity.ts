import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

export enum SocialProvider {
  GOOGLE = 'google',
}

@Entity('social_accounts')
export class SocialAccount {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ enum: SocialProvider })
  provider!: string;

  @Column({ unique: true })
  providerId!: string;

  @Column()
  email!: string;

  @Column({ nullable: true })
  image!: string;

  @ManyToOne(() => User, (user) => user.socialAccounts)
  user!: User;
}
