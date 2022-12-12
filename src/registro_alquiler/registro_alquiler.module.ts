import { Module } from '@nestjs/common';
import { RegistroAlquilerService } from './registro_alquiler.service';
import { RegistroAlquilerController } from './registro_alquiler.controller';

@Module({
  controllers: [RegistroAlquilerController],
  providers: [RegistroAlquilerService]
})
export class RegistroAlquilerModule {}
