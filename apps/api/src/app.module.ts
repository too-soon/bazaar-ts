import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { DatabaseModule } from './database/database.provider';
import { StoresModule } from './domain/store/store.module';
import { AuthModule } from 'domain/auth/auth.module';
import { ProductModule } from 'domain/product/product.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    ProductModule,
    StoresModule,
  ],
})
export class AppModule {}
