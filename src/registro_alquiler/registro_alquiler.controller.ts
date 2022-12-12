import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroAlquilerService } from './registro_alquiler.service';
import { CreateRegistroAlquilerDto } from './dto/create-registro_alquiler.dto';
import { UpdateRegistroAlquilerDto } from './dto/update-registro_alquiler.dto';

@Controller('registro-alquiler')
export class RegistroAlquilerController {
  constructor(private readonly registroAlquilerService: RegistroAlquilerService) {}

  @Post()
  create(@Body() createRegistroAlquilerDto: CreateRegistroAlquilerDto) {
    return this.registroAlquilerService.create(createRegistroAlquilerDto);
  }

  @Get()
  findAll() {
    return this.registroAlquilerService.findAll();
  }

  @Get(':folio')
  findOne(@Param('folio') folio: string) {
    return this.registroAlquilerService.findOne(folio);
  }

  @Patch(':folio')
  update(@Param('folio') folio: string, @Body() updateRegistroAlquilerDto: UpdateRegistroAlquilerDto) {
    return this.registroAlquilerService.update(folio, updateRegistroAlquilerDto);
  }

  @Delete(':folio')
  remove(@Param('folio') folio: string) {
    return this.registroAlquilerService.remove(folio);
  }
}
