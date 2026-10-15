import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Store } from './store.entity';

// enum ProductVisibility = { PUBLIC: 'public', PRIVATE: 'private' } as const;

enum ProductVisibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @ManyToOne(() => Store, (store) => store.products)
  store!: Store;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: true,
    default: null,
  })
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
