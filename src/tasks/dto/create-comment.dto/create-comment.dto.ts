import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  contenido: string;

  @IsNumber()
  @IsNotEmpty()
  tareaId: number;

  @IsNumber()
  @IsNotEmpty()
  usuarioId: number;
}
