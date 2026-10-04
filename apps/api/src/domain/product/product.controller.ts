import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(@Inject(ProductService) private productService: ProductService) {}

  @Get()
  async getProducts() {
    return this.productService.getProducts();
  }

  /**
   * @todo Add auth: only store owners are able to add products
   * @todo Add store signature: owners should only be able to add products to their own store
   * @todo Add administrative auth: admins should be able to add products to any store
   */
  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    return this.productService.createProduct(payload);
  }
}
