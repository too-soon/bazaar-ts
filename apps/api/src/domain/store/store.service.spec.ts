import { Test, TestingModule } from '@nestjs/testing';
import { StoreService } from './store.service';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Store } from '@/database/entity/store.entity';
import { ConflictException, NotFoundException } from '@nestjs/common';

describe('StoreService', () => {
  let service: StoreService;
  const storeRepository = {
    create: vi.fn(),
    save: vi.fn(),
    find: vi.fn(),
    findOne: vi.fn(),
    remove: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StoreService,
        { provide: getRepositoryToken(Store), useValue: storeRepository },
      ],
    }).compile();

    service = module.get<StoreService>(StoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deletes a store without products', async () => {
    const store = { id: 'store-id', products: [] };
    storeRepository.findOne.mockResolvedValue(store);
    storeRepository.remove.mockResolvedValue(store);

    await expect(service.deleteOne('store-id')).resolves.toBe(store);
    expect(storeRepository.remove).toHaveBeenCalledWith(store);
  });

  it('rejects deleting a store with products', async () => {
    storeRepository.findOne.mockResolvedValue({
      id: 'store-id',
      products: [{ id: 'product-id' }],
    });

    await expect(service.deleteOne('store-id')).rejects.toBeInstanceOf(
      ConflictException,
    );
    expect(storeRepository.remove).not.toHaveBeenCalled();
  });

  it('returns not found when the store does not exist', async () => {
    storeRepository.findOne.mockResolvedValue(null);

    await expect(service.deleteOne('store-id')).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
