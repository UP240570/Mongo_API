import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'empleados', timestamps: true })
export class Empleado extends Document {
  @Prop({ required: true, unique: true, index: true })
  id_emp!: number;

  @Prop({ required: true, trim: true })
  nombre!: string;

  @Prop({ required: true, trim: true })
  apellido!: string;

  @Prop({ required: true, trim: true, lowercase: true, unique: true })
  email!: string;

  @Prop({ required: true, trim: true })
  puesto!: string;

  @Prop({ required: true })
  id_dep!: number;

  @Prop({ required: true, min: 0 })
  salario!: number;

  @Prop({ default: Date.now })
  fecha_ingreso!: Date;

  @Prop({ default: true })
  activo!: boolean;
}

export const EmpleadoSchema = SchemaFactory.createForClass(Empleado);