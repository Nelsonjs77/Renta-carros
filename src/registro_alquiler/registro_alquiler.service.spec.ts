import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAlquilerService } from './registro_alquiler.service';

describe('RegistroAlquilerService', () => {
  let service: RegistroAlquilerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroAlquilerService],
    }).compile();

    service = module.get<RegistroAlquilerService>(RegistroAlquilerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
