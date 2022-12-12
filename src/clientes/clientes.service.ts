import { Injectable, NotFoundException } from '@nestjs/common';
import { ValidationMessages } from 'src/helpers/validation.messages.helper';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClientesService {

  arrClientes: Cliente[] = [
    {
      id: uuidv4(),
      nombre: "Miguel Miguelin",
      dirreccion: "Grove street",
      telefono: 2711852889,
      email: "nelsonjuarezsandoval4@gmail.com"
    }
  ]

  create(createClienteDto: CreateClienteDto) {
    const cliente: Cliente = {
      id: uuidv4(),  
      ...createClienteDto,
      }
      this.arrClientes.push(cliente)
  }

  findAll() {
    return this.arrClientes;
  }

  findOne(id: string) {
    const cliente = this.arrClientes.find( x => x.id === id)
    if(!cliente){
      throw new NotFoundException(ValidationMessages.ElEMENTO_NO_ENCONTRADO)
    }
    return cliente;
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    let clienteUpdate = this.findOne(id)
    const distribuidor = this.arrClientes.find( x => x.id === id)
    if(!distribuidor){
      throw new NotFoundException(ValidationMessages.CLIENTE_NO_REGISTRADO);
    }
    this.arrClientes = this.arrClientes.map(x => {
      if(x.id === id){
        clienteUpdate = {
          ...clienteUpdate,
          ...updateClienteDto,
        };
        return clienteUpdate;
      } else {
        return x;
      }
    })

    return clienteUpdate;
  }

  remove(id: string) {
    this.arrClientes = this.arrClientes.filter( x => x.id !== id);
  }
}
