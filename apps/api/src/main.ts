import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const siteUrl = configService.get<string>('SITE_URL');

  app.use(cookieParser());

  app.enableCors({
    origin: siteUrl,
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
