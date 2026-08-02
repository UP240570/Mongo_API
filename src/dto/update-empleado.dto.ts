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

export class UpdateEmpleadoDto {
  @IsOptional()
  @IsInt()
  id_emp?: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  nombre?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  apellido?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  puesto?: string;

  @IsOptional()
  @IsInt()
  id_dep?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  salario?: number;

  @IsOptional()
  @IsDateString()
  fecha_ingreso?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}