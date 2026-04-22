import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PGliteDriver } from 'typeorm-pglite';
import { uuid_ossp } from '@electric-sql/pglite/contrib/uuid_ossp';
import { User } from './entity/user.entity';
import { Address } from './entity/address.entity';
import { SocialAccount } from './entity/social-account.entity';
import { Store } from './entity/store.entity';
import { Product } from './entity/product.entity';
import { ConfigModule } from '@nestjs/config';

// Create a shared in-memory instance or new one per test
export const pglite = new PGliteDriver({
  extensions: {
    uuid_ossp: uuid_ossp,
  },
});

const entities = [User, Address, SocialAccount, Store, Product];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        driver: pglite.driver,
        entities,
        synchronize: true,
        dropSchema: true,
      }),
    }),
  ],
})
export class TestDatabaseModule {}
