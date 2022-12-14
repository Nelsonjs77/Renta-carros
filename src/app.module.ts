import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { ClientesModule } from './clientes/clientes.module';
import { DistribuidoresModule } from './distribuidores/distribuidores.module';
import { RegistroAlquilerModule } from './registro_alquiler/registro_alquiler.module';

@Module({
  imports: [AutosModule, ClientesModule, DistribuidoresModule, RegistroAlquilerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
