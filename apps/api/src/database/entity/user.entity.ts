import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SocialAccount } from './social-account.entity';
import { Address } from './address.entity';
import { Association } from './association.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  email!: string;

  @OneToMany(() => SocialAccount, (socialAccount) => socialAccount.user)
  socialAccounts!: SocialAccount[];

  @Column({ unique: true, nullable: true })
  CPF!: string;

  @Column({ unique: true, nullable: true })
  phone!: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses!: Address[];

  @OneToMany(() => Association, (association) => association.store)
  associations!: Association[];
}
