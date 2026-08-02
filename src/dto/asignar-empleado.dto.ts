import { IsInt, IsNotEmpty } from 'class-validator';

export class AsignarEmpleadoDto {
  @IsNotEmpty()
  @IsInt()
  id_emp: number;
}