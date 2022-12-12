import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutosModule } from './autos/autos.module';
import { ClientesModule } from './clientes/clientes.module';
import { DistribuidoresModule } from './distribuidores/distribuidores.module';
import { RegistroAlquilerModule } from './registro_alquiler/registro_alquiler.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/renta-carros'),
  AutosModule, ClientesModule, DistribuidoresModule, RegistroAlquilerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
