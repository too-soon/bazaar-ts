import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.provider';
import { ProductModule } from './products/product.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, ProductModule],
})
export class AppModule {}
