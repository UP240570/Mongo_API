import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsInt()
  id_emp!: number;

  @IsString()
  @IsNotEmpty()
  nombre!: string;

  @IsString()
  @IsNotEmpty()
  apellido!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @IsNotEmpty()
  puesto!: string;

  @IsInt()
  id_dep!: number;

  @IsNumber()
  @Min(0)
  salario!: number;

  @IsOptional()
  @IsDateString()
  fecha_ingreso?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}