import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Store } from './store.entity';
import { User } from './user.entity';

enum AssociationLevel {
  MANAGER = 'manager',
  EMPLOYEE = 'employee',
}

@Entity('store_association')
export class Association {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.associations, {
    onDelete: 'CASCADE',
  })
  user!: User;

  @ManyToOne(() => Store, (store) => store.associations, {
    onDelete: 'CASCADE',
  })
  store!: Store;

  @Column({
    type: 'enum',
    enum: AssociationLevel,
    default: AssociationLevel.EMPLOYEE,
  })
  level!: AssociationLevel;
}
