import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../app.module';
import { describe, beforeEach, it, expect } from 'vitest';
import { TestDatabaseModule } from '../database/test-database.provider';
import { DatabaseModule } from '../database/database.provider';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideModule(DatabaseModule)
      .useModule(TestDatabaseModule)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('POST store with validation errors', async () => {
    const body = {
      name: null,
      slug: 'valid-slug',
    };

    const response = await request(app.getHttpServer())
      .post('/stores')
      .send(body);
    console.dir(
      {
        status: response.status,
        headers: response.headers,
        body: response.body,
        text: response.text,
      },
      { depth: null },
    );
    return;
  });

  it('/stores (GET)', () => {
    return request(app.getHttpServer()).get('/stores').expect(200).expect([]);
  });
});
