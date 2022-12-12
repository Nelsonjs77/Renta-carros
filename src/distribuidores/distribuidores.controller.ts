import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistribuidoresService } from './distribuidores.service';
import { CreateDistribuidoreDto } from './dto/create-distribuidore.dto';
import { UpdateDistribuidoreDto } from './dto/update-distribuidore.dto';

@Controller('distribuidores')
export class DistribuidoresController {
  constructor(private readonly distribuidoresService: DistribuidoresService) {}

  @Post()
  create(@Body() createDistribuidoreDto: CreateDistribuidoreDto) {
    return this.distribuidoresService.create(createDistribuidoreDto);
  }

  @Get()
  findAll() {
    return this.distribuidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distribuidoresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistribuidoreDto: UpdateDistribuidoreDto) {
    return this.distribuidoresService.update(id, updateDistribuidoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distribuidoresService.remove(id);
  }
}
