import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Store } from './store.entity';

const ProductVisibility = { PUBLIC: 'public', PRIVATE: 'private' } as const;
type ProductVisibility =
  (typeof ProductVisibility)[keyof typeof ProductVisibility];

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @ManyToOne(() => Store, (store) => store.products)
  store!: Store;

  @Column('decimal', { precision: 10, scale: 2 })
  price!: number;

  /** @todo must be unique per store */
  @Column()
  slug!: string;

  @Column({ enum: ProductVisibility, default: ProductVisibility.PUBLIC })
  visibility!: ProductVisibility;

  @Column({ default: 0 })
  stock!: number;

  /** @maybe DimensionGroup relationship */
  // weight!: number;
  // height!: number;
  // width!: number;
  // length!: number;
}
