import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Departamento } from '../../schemas/departamento.schema';

@Injectable()
export class DepartamentosService {
  constructor(
    @InjectModel(Departamento.name) private readonly departamentoModel: Model<Departamento>,
  ) {}

  async findAll(): Promise<Departamento[]> {
    return this.departamentoModel.find().exec();
  }
  
}