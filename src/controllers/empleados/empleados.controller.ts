import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { CreateEmpleadoDto } from '../../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../../dto/update-empleado.dto';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  create(@Body() createEmpleadoDto: CreateEmpleadoDto) {
    return this.empleadosService.create(createEmpleadoDto);
  }

  @Get()
  findAll() {
    return this.empleadosService.findAll();
  }

  @Get('count/total')
  count() {
    return this.empleadosService.count();
  }

  // Consulta con relación: GET /empleados/detalle
  @Get('detalle')
  findAllConDepartamento() {
    return this.empleadosService.findAllConDepartamento();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadosService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateEmpleadoDto: UpdateEmpleadoDto,
  ) {
    return this.empleadosService.update(id, updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadosService.remove(id);
  }
}