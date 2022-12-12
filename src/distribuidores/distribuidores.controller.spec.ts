import { Test, TestingModule } from '@nestjs/testing';
import { DistribuidoresController } from './distribuidores.controller';
import { DistribuidoresService } from './distribuidores.service';

describe('DistribuidoresController', () => {
  let controller: DistribuidoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribuidoresController],
      providers: [DistribuidoresService],
    }).compile();

    controller = module.get<DistribuidoresController>(DistribuidoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
