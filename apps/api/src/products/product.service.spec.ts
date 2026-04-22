import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { TestDatabaseModule } from '../database/test-database.provider';
import { Product } from '../database/entity/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { getPGliteInstance } from 'typeorm-pglite';
import { test, beforeAll, describe, afterAll, expect } from 'vitest';

describe('ProductService (PGlite)', () => {
  let service: ProductService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestDatabaseModule, TypeOrmModule.forFeature([Product])],
      providers: [ProductService],
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  afterAll(async () => {
    const instance = await getPGliteInstance();
    await instance.close();
  });

  test('should create and retrieve a product', async () => {
    const product: Product = await service.createProduct({
      title: 'Test Product',
    });
    expect(product.id).toBeDefined();

    const found = await service.getProduct(product.id);
    expect(found?.title).toBe('Test Product');
  });
});
