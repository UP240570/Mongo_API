import { IsInt, IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreatePcDto {
  @IsNotEmpty()
  @IsInt()
  id_pc: number;

  @IsNotEmpty()
  @IsString()
  marca: string;

  @IsNotEmpty()
  @IsString()
  numero_serie: string;

  @IsOptional()
  @IsDateString()
  fecha_compra?: string;
}