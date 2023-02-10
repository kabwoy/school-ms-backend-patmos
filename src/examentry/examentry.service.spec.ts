import { Test, TestingModule } from '@nestjs/testing';
import { ExamentryService } from './examentry.service';

describe('ExamentryService', () => {
  let service: ExamentryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExamentryService],
    }).compile();

    service = module.get<ExamentryService>(ExamentryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
