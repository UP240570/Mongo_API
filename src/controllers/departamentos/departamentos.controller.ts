import { Controller, Get } from '@nestjs/common';
import { DepartamentosService } from '../../services/departamentos/departamentos.service';

@Controller('departamentos')
export class DepartamentosController {
    constructor(private readonly departamentosService: DepartamentosService) {}
    @Get()
    findAll(){
        return this.departamentosService.findAll();
    }

}
