import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';

@Controller('stores')
export class StoreController {
  constructor(@Inject(StoreService) private storeService: StoreService) {}

  @Get()
  async getAll() {
    return this.storeService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.storeService.getOne(id);
  }

  /**
   * @todo Add auth: only store owners are able to add products
   * @todo Add store signature: owners should only be able to add products to their own store
   * @todo Add administrative auth: admins should be able to add products to any store
   */
  @Post()
  createOne(@Body() dto: CreateStoreDto) {
    return this.storeService.createOne(dto);
  }

  @Put(':id')
  updateOne(@Body() dto: CreateStoreDto, @Param('id') id: string) {
    return this.storeService.updateOne(id, dto);
  }
}
