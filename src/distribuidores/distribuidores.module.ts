import { Module } from '@nestjs/common';
import { DistribuidoresService } from './distribuidores.service';
import { DistribuidoresController } from './distribuidores.controller';

@Module({
  controllers: [DistribuidoresController],
  providers: [DistribuidoresService],
  exports: [DistribuidoresService]
})
export class DistribuidoresModule {}
