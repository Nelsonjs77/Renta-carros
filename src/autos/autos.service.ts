import { Injectable, NotFoundException} from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { Auto } from './entities/auto.entity';
import { v4 as uuidv4 } from 'uuid';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { DistribuidoresService } from 'src/distribuidores/distribuidores.service';

@Injectable()
export class AutosService {

  arrAutos: Auto[] = [
    {
      id: uuidv4(),
      placas: "ygj-1489-fh",
      marca: "Nissan",
      modelo: "tsuru",
      color: "azul",
      fechaCompra: new Date().toLocaleDateString(),
      rentaDiaria: 800,
      distribuidor: "UNSC"
    }
  ]

  constructor( 
    private readonly distribuidoresService: DistribuidoresService
  ){}

  create(createAutoDto: CreateAutoDto) {
    const distribuidor = this.distribuidoresService.arrDistribuidores.find( x => x.nombreComercial === createAutoDto.distribuidor)
    if(!distribuidor){
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    const car: Auto= {
      id: uuidv4(),
    ...createAutoDto,
      fechaCompra: new Date().toLocaleDateString(),
      distribuidor: distribuidor.nombreComercial
    }
    this.arrAutos.push(car)
  }

  findAll() {
    return this.arrAutos;
  }

  findOne(id: string) {
    const car = this.arrAutos.find( x => x.id === id)
    if(!car){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    return car;
  }

  update(id: string, updateAutoDto: UpdateAutoDto) {
    let autoUpdate = this.findOne(id)
    const distribuidor = this.distribuidoresService.arrDistribuidores.find( x => x.nombreComercial === updateAutoDto.distribuidor)
    if(!distribuidor){
      throw new NotFoundException(ValidationMessages.DISTRIBUIDOR_NO_REGISTRADO);
    }
    if (!autoUpdate)
    throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    this.arrAutos = this.arrAutos.map(x => {
      if(x.id === id){
        autoUpdate = {
          id: uuidv4(),
          ...autoUpdate,
          ...updateAutoDto,
          distribuidor: distribuidor.nombreComercial
        };
        return autoUpdate;
      } else {
        return x;
      }
    })

    return autoUpdate;
  }

  remove(id: string) {
    this.arrAutos = this.arrAutos.filter( x => x.id !== id);
  }
}
