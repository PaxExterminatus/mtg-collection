import { Test, TestingModule } from '@nestjs/testing';
import { ApiCollectionController } from './api.collection.controller';
import { ApiCollectionService } from './api.collection.service';

describe('AppController', () => {
  let appController: ApiCollectionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ApiCollectionController],
      providers: [ApiCollectionService],
    }).compile();

    appController = app.get<ApiCollectionController>(ApiCollectionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
