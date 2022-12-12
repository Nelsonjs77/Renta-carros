import { Test, TestingModule } from '@nestjs/testing';
import { DistribuidoresService } from './distribuidores.service';

describe('DistribuidoresService', () => {
  let service: DistribuidoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistribuidoresService],
    }).compile();

    service = module.get<DistribuidoresService>(DistribuidoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
