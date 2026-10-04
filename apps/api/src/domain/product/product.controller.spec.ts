import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from '../database/entity/product.entity';
import { test, beforeEach, describe, expect } from 'vitest';
import { TestDatabaseModule } from '../database/test-database.provider';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [TestDatabaseModule, TypeOrmModule.forFeature([Product])],
      controllers: [ProductController],
      providers: [ProductService],
    }).compile();

    controller = app.get<ProductController>(ProductController);
  });

  describe('root', () => {
    test('should return "Hello World!"', async () => {
      const products = await controller.getProducts();
      expect(products).toStrictEqual([]);
    });

    // test('should return "Hello World!"', () => {
    //   const result = controller.getProducts();
    //   expect(result[0]).toHaveProperty('title');
    //   expect(result[0]['title']).toEqual('Example Product');
    // });
  });
});
