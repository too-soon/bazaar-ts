import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from '../../database/entity/store.entity';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/create-store.dto';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
  ) {}

  async createOne(data: CreateStoreDto) {
    const store = this.storeRepository.create(data);
    return this.storeRepository.save(store);
  }

  async getAll() {
    return this.storeRepository.find();
  }

  async getOne(id: string) {
    return this.storeRepository.findOne({ where: { id } });
  }

  async updateOne(id: string, data: CreateStoreDto) {
    const store = await this.storeRepository.findOne({ where: { id } });
    if (!store) {
      throw new NotFoundException('Store not found');
    }
    Object.assign(store, data);
    return this.storeRepository.save(store);
  }

  async deleteOne(id: string) {
    const store = await this.storeRepository.findOne({
      where: { id },
      relations: { products: true },
    });
    if (!store) {
      throw new NotFoundException('Store not found');
    }
    /** @todo possibly soft delete or cascading */
    if (store.products.length > 0) {
      throw new ConflictException('Cannot delete a store that has products');
    }

    return this.storeRepository.remove(store);
  }
}
