import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDistribuidoreDto } from './dto/create-distribuidore.dto';
import { UpdateDistribuidoreDto } from './dto/update-distribuidore.dto';
import { ValidationMessages } from '../Helpers/validation.messages.helper';
import { v4 as uuidv4 } from 'uuid';
import { Distribuidore } from './entities/distribuidore.entity';

@Injectable()
export class DistribuidoresService {

  arrDistribuidores : Distribuidore[] = [
    {
      id: uuidv4(),
      nombreComercial: "BolinVolovan",
      dirreccion: "Enrrique segoviano",
      ciudad: "Orizaba, Ver",
      telefono: 2712292713,
      nombreContacto: "Nelson Juarez Sandoval"
    }
  ]

  create(createDistribuidoreDto: CreateDistribuidoreDto) {
    const distribuidor: Distribuidore = {
      id: uuidv4(),
      ...createDistribuidoreDto
    };
    this.arrDistribuidores.push(distribuidor);
  }

  findAll() {
    return this.arrDistribuidores;
  }

  findOne(id: string) {
    const distribuidor = this.arrDistribuidores.find( x => x.id === id)
    if(!distribuidor){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    }
    return distribuidor;
  }

  update(id: string, updateDistribuidoreDto: UpdateDistribuidoreDto) {
    let distribuidorDB = this.findOne(id)
    if (!distribuidorDB)
    throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    this.arrDistribuidores = this.arrDistribuidores.map(item => {
      if(item.id === id){
        distribuidorDB = {
          id: id,
          ...distribuidorDB, ...updateDistribuidoreDto
        };
        return distribuidorDB;
      } else {
        return item;
      }
    })

    return distribuidorDB;
  }

  remove(id: string) {
    this.arrDistribuidores = this.arrDistribuidores.filter(x => x.id !== id);
  }
}
