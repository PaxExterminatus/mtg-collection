import { Test, TestingModule } from '@nestjs/testing';
import { CollectionController } from './collection/collection.controller';
import { CollectionService } from './collection/collection.service';

describe('AppController', () => {
  let appController: CollectionController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CollectionController],
      providers: [CollectionService],
    }).compile();

    appController = app.get<CollectionController>(CollectionController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
