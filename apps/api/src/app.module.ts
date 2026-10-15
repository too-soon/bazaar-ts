import {
  Module,
  UnprocessableEntityException,
  ValidationPipe,
} from '@nestjs/common';
import { UserModule } from '@/domain/user/user.module';
import { DatabaseModule } from './database/database.provider';
import { StoresModule } from '@/domain/store/store.module';
import { AuthModule } from '@/domain/auth/auth.module';
import { ProductModule } from '@/domain/product/product.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    ProductModule,
    StoresModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        errorFormat: 'grouped',
        // exceptionFactory: (validationErrors = []) => {
        //   const errors = validationErrors.map((error) => ({
        //     field: error.property,
        //     message: Object.values(error.constraints ?? {})[0],
        //   }));

        //   return new UnprocessableEntityException({
        //     statusCode: 422,
        //     error: 'Validation Failed',
        //     errors,
        //   });
        // },
      }),
    },
  ],
})
export class AppModule {}
