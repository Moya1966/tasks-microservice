import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsOptional()
  cuenta: string;

  @IsDate()
  @IsOptional()
  fechaEjecucion: Date;
}
