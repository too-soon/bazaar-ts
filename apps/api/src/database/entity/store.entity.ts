import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from './product.entity';
import { Association } from './association.entity';

@Entity('store')
export class Store {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ unique: true })
  slug!: string;

  @Column()
  name!: string;

  @OneToMany(() => Product, (product) => product.store)
  products!: Product[];

  @OneToMany(() => Association, (association) => association.store)
  associations!: Association[];
}
