import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Empleado } from '../../schemas/empleado.schema';
import { CreateEmpleadoDto } from '../../dto/create-empleado.dto';
import { UpdateEmpleadoDto } from '../../dto/update-empleado.dto';

@Injectable()
export class EmpleadosService {
  constructor(
    @InjectModel(Empleado.name) private readonly empleadoModel: Model<Empleado>,
  ) {}

  create(createEmpleadoDto: CreateEmpleadoDto) {
    const empleado = new this.empleadoModel(createEmpleadoDto);
    return empleado.save();
  }

  findAll() {
    return this.empleadoModel.find();
  }

  findOne(id: string) {
    return this.empleadoModel.findById(id);
  }

  update(id: string, updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadoModel.findByIdAndUpdate(id, updateEmpleadoDto, { new: true });
  }

  remove(id: string) {
    return this.empleadoModel.findByIdAndDelete(id);
  }

  count() {
    return this.empleadoModel.countDocuments();
  }

  // CONSULTA CON RELACIÓN 2:
  // trae todos los empleados y les pega el nombre de su departamento.
  // Objetivo: mostrar "Sistemas" en vez de solo el número id_dep,
  // sin tener que consultar la colección "departamentos" aparte.
  findAllConDepartamento() {
    return this.empleadoModel.aggregate([
      {
        $lookup: {
          from: 'departamentos',
          localField: 'id_dep',
          foreignField: 'id_dep',
          as: 'departamento',
        },
      },
      {
        $unwind: { path: '$departamento', preserveNullAndEmptyArrays: true },
      },
    ]);
  }
}