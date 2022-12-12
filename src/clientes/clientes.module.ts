import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ClienteM, ClienteSchema } from './entities/cliente.entity.mongo';

@Module({
  controllers: [ClientesController],
  providers: [ClientesService],
  exports: [ClientesService],
  imports:[//Agregar estas lineas
        MongooseModule.forFeature([
          {
            name: ClienteM.name,
            schema: ClienteSchema
          }
        ])
      ]
})
export class ClientesModule {}
