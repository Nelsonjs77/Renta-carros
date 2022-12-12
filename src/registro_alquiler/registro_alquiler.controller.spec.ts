import { Test, TestingModule } from '@nestjs/testing';
import { RegistroAlquilerController } from './registro_alquiler.controller';
import { RegistroAlquilerService } from './registro_alquiler.service';

describe('RegistroAlquilerController', () => {
  let controller: RegistroAlquilerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroAlquilerController],
      providers: [RegistroAlquilerService],
    }).compile();

    controller = module.get<RegistroAlquilerController>(RegistroAlquilerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
