import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'pcs' })
export class Pc extends Document {
  @Prop({ required: true, unique: true, index: true })
  id_pc!: number;

  @Prop({ required: true, trim: true })
  marca!: string;

  @Prop({ required: true, trim: true, unique: true })
  numero_serie!: string;

  @Prop({ default: Date.now })
  fecha_compra!: Date;

  // Sin valor mientras la pc no se le asigne a nadie.
  // Se relaciona con "empleados" por el id_emp (no es un ObjectId de Mongo,
  // es el mismo número que usamos como id_emp en la otra colección).
  @Prop({ required: false })
  id_emp?: number;
}

export const PcSchema = SchemaFactory.createForClass(Pc);