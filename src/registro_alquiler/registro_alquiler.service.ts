import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRegistroAlquilerDto } from './dto/create-registro_alquiler.dto';
import { UpdateRegistroAlquilerDto } from './dto/update-registro_alquiler.dto';
import { RegistroAlquiler } from './entities/registro_alquiler.entity';
import { v4 as uuidv4 } from 'uuid'
import { ClientesService } from 'src/clientes/clientes.service';
import { AutosService } from 'src/autos/autos.service';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';

@Injectable()
export class RegistroAlquilerService {
  arrRegistros: RegistroAlquiler[] = [
    {
      folio: uuidv4(),
      placas: "PSYT-LSLF-8",
      fechaEntrada: "01/01/2022",
      fechaSalida: "01/01/2023",
      nombreClientes: "Mcdiel Musk",
      email: "manolin@gmail.com",
      telefono: 2711852889
    }
  ]

  arrClientes: any;

  constructor(
    private readonly clienteService: ClientesService,
    private readonly carrosService: AutosService
  ){}

  create(createRegistroAlquilerDto: CreateRegistroAlquilerDto) {
    const cliente = this.clienteService.arrClientes.find(x => x.nombre === createRegistroAlquilerDto.nombreClientes)
    if(!cliente){
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_REGISTRADO)
    }
    const carro = this.carrosService.arrAutos.find(x => x.placas === createRegistroAlquilerDto.placas)
    if(!carro){
      throw new NotFoundException(ValidationMessages.PLACAS_NO_REGISTRADAS)
    }
    const registro: RegistroAlquiler = {
      folio: uuidv4(),
      ...createRegistroAlquilerDto,
      fechaSalida: "No Entregado",
      placas: carro.placas,
      nombreClientes: cliente.nombre,
      telefono: cliente.telefono,
      email: cliente.email
    }
    this.arrRegistros.push(registro) 
  }

  findAll() {
    return this.arrRegistros;
  }

  findOne(folio: string) {
    const registro = this.arrRegistros.find( x => x.folio === folio)
     if(!registro){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
     }
     return registro
  }

  update(folio: string, updateRegistroAlquilerDto: UpdateRegistroAlquilerDto) {
    let registroUpdate = this.findOne(folio)
    const registro = this.arrRegistros.find( x => x.folio === folio)
    if(!registro){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO);
    }
    this.arrRegistros = this.arrRegistros.map(x => {
      if(x.folio === folio){
        registroUpdate = {
          ...registroUpdate,
          ...updateRegistroAlquilerDto,
        };
        return registroUpdate;
      } else {
        return x;
      }
    })

    return registroUpdate;
  }

  remove(folio: string) {
    this.arrClientes = this.arrClientes.filter( x => x.id !== folio);
  }

  checkout(folio: string){
    let registroFinal = this.findOne(folio)
    const checkout = this.arrRegistros.find( x => x.folio === folio)
    if(!checkout){
      throw new NotFoundException(ValidationMessages.FOLIO_INVALIDO);
    }
    this.arrRegistros = this.arrRegistros.map(x => {
      if(x.folio === folio){
        registroFinal = {
          ...checkout,
          fechaSalida: new Date().toLocaleDateString()
        };
        return registroFinal;
      } else {
        return x;
      }
    })

    return registroFinal;

  }

}
