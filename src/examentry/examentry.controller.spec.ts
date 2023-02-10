import { Test, TestingModule } from '@nestjs/testing';
import { ExamentryController } from './examentry.controller';
import { ExamentryService } from './examentry.service';

describe('ExamentryController', () => {
  let controller: ExamentryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamentryController],
      providers: [ExamentryService],
    }).compile();

    controller = module.get<ExamentryController>(ExamentryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
