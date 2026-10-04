import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { SocialAccount } from './social-account.entity';
import { Address } from './address.entity';
import { Association } from './association.entity';

export enum Role {
  CUSTOMER = 'customer',
  DEVELOPER = 'developer',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @OneToMany(() => SocialAccount, (socialAccount) => socialAccount.user)
  socialAccounts!: SocialAccount[];

  @Column({ unique: true, nullable: true })
  phone!: string;

  @OneToMany(() => Address, (address) => address.user)
  addresses!: Address[];

  @OneToMany(() => Association, (association) => association.store)
  associations!: Association[];

  @OneToMany(() => Document, (documents) => documents.user)
  documents!: Document[];

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.CUSTOMER,
  })
  role!: Role;
}

@Entity('document')
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  type!: string;

  @Column()
  number!: string;

  @ManyToOne(() => User, (user) => user.documents)
  user!: User;
}
