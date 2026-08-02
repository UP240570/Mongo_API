import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PcsService } from '../../services/pcs/pcs.service';
import { CreatePcDto } from '../../dto/create-pc.dto';
import { AsignarEmpleadoDto } from '../../dto/asignar-empleado.dto';

@Controller('pcs')
export class PcsController {
  constructor(private readonly pcsService: PcsService) {}

  @Post()
  create(@Body() createPcDto: CreatePcDto) {
    return this.pcsService.create(createPcDto); // crea la pc sin empleado asignado
  }

  @Get()
  findAll() {
    return this.pcsService.findAll();
  }

  // Consulta con relación: GET /pcs/detalle
  @Get('detalle')
  findAllConEmpleado() {
    return this.pcsService.findAllConEmpleado();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pcsService.findOne(id);
  }

  @Post(':id/asignar')
  asignarEmpleado(
    @Param('id') id: string,
    @Body() asignarEmpleadoDto: AsignarEmpleadoDto,
  ) {
    return this.pcsService.asignarEmpleado(id, asignarEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pcsService.remove(id);
  }
}