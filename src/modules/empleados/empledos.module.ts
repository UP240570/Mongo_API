import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmpleadosController } from '../../controllers/empleados/empleados.controller';
import { EmpleadosService } from '../../services/empleados/empleados.service';
import { Empleado, EmpleadoSchema } from '../../schemas/empleado.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Empleado.name,
        schema: EmpleadoSchema,
      },
    ]),
  ],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}