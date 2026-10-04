import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from 'database/entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async getProducts() {
    return await this.productRepository.find({ relations: ['store'] });
  }

  async getProduct(id: string) {
    return await this.productRepository.findOne({ where: { id } });
  }

  /** @todo Add conversion/transform method from CreateProductDto to Product */
  async createProduct(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);

    return this.productRepository.save(product);
  }
}
