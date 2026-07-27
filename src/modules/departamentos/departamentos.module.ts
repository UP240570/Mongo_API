import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartamentosController } from '../../controllers/departamentos/departamentos.controller';
import { DepartamentosService } from '../../services/departamentos/departamentos.service';
import { DepartamentoSchema } from '../../schemas/departamento.schema';
import { Departamento } from '../../schemas/departamento.schema';

@Module({
  imports: [
  MongooseModule.forFeature([
    {
      name: Departamento.name,
      schema: DepartamentoSchema,
    },
  ]),
],
  controllers: [DepartamentosController],
  providers: [DepartamentosService],
})
export class DepartamentosModule {}
