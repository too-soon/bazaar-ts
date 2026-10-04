import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';
import { TestDatabaseModule } from '../database/test-database.provider';
import { Product } from '../database/entity/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { getPGliteInstance } from 'typeorm-pglite';
import { test, beforeAll, describe, afterAll, expect } from 'vitest';
import { Store } from 'database/entity/store.entity';
import { StoreService } from 'domain/store/store.service';

describe('ProductService (PGlite)', () => {
  let service: ProductService;
  let storeService: StoreService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TestDatabaseModule, TypeOrmModule.forFeature([Product, Store])],
      providers: [ProductService, StoreService],
    }).compile();

    service = module.get<ProductService>(ProductService);
    storeService = module.get<StoreService>(StoreService);
  });

  afterAll(async () => {
    const instance = await getPGliteInstance();
    await instance.close();
  });

  test('should create and retrieve a product', async () => {
    const store = await storeService.createStore({
      name: 'Test Store',
    });
    const product: Product = await service.createProduct({
      title: 'Test Product',
      storeId: store.id,
    });
    expect(product.id).toBeDefined();

    const found = await service.getProduct(product.id);
    expect(found?.title).toBe('Test Product');
  });
});
