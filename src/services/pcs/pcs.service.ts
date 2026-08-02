import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pc } from '../../schemas/pc.schema';
import { CreatePcDto } from '../../dto/create-pc.dto';
import { AsignarEmpleadoDto } from '../../dto/asignar-empleado.dto';

@Injectable()
export class PcsService {
  constructor(@InjectModel(Pc.name) private readonly pcModel: Model<Pc>) {}

  create(createPcDto: CreatePcDto) {
    const pc = new this.pcModel(createPcDto); // se crea SIN id_emp, la pc queda "sin dueño"
    return pc.save();
  }

  findAll() {
    return this.pcModel.find();
  }

  findOne(id: string) {
    return this.pcModel.findById(id);
  }

  remove(id: string) {
    return this.pcModel.findByIdAndDelete(id);
  }

  // Acción extra (no es un CRUD normal): le pone el id_emp a una pc que ya existe.
  asignarEmpleado(id: string, asignarEmpleadoDto: AsignarEmpleadoDto) {
    return this.pcModel.findByIdAndUpdate(
      id,
      { id_emp: asignarEmpleadoDto.id_emp },
      { new: true },
    );
  }

  // CONSULTA CON RELACIÓN 1:
  // trae todas las pcs y, si tienen id_emp, les "pega" los datos del empleado dueño.
  // Objetivo: saber en una sola consulta qué equipo tiene cada persona (marca, serie, nombre, puesto),
  // sin tener que ir a buscar cada empleado por separado.
  findAllConEmpleado() {
    return this.pcModel.aggregate([
      {
        $lookup: {
          from: 'empleados', // colección con la que se relaciona
          localField: 'id_emp', // campo en "pcs"
          foreignField: 'id_emp', // campo equivalente en "empleados"
          as: 'empleado', // así se va a llamar el resultado
        },
      },
      {
        // $lookup siempre regresa un arreglo; como aquí es 1 pc -> 1 empleado (o ninguno),
        // lo "desenvolvemos" para que quede como objeto simple en vez de arreglo de 1.
        $unwind: { path: '$empleado', preserveNullAndEmptyArrays: true },
      },
    ]);
  }
}