import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from 'database/entity/store.entity';
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
      throw new Error('Store not found');
    }
    Object.assign(store, data);
    return this.storeRepository.save(store);
  }
}
