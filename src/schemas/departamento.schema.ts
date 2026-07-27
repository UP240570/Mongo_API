import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({collection: 'departamentos'})

@Schema()
export class Departamento extends Document {
  @Prop({required: true, unique: true, index: true})

  id_dep!: number;
  @Prop({required: true, trim: true})
  nombre!: string;
}

export const DepartamentoSchema = SchemaFactory.createForClass(Departamento);
