import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Tarea, Comentario } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  // Crear una nueva tarea
  async createTask(data: any): Promise<Tarea> {
    return this.prisma.tarea.create({ data });
  }

  // Crear un comentario en una tarea
  async createComment(data: any): Promise<Comentario> {
    return this.prisma.comentario.create({ data });
  }

  // Consultar todas las tareas con filtros
  async getTasks(filters: any): Promise<Tarea[]> {
    const { estado, responsableId, cuenta, fechaEjecucion } = filters;
    
    return this.prisma.tarea.findMany({
      where: {
        estado,
        responsableId,
        cuenta,
        fechaEjecucion: {
          lte: fechaEjecucion || undefined, // Filtrar por fecha si es proporcionada
        },
      },
      include: {
        comentarios: true, // Incluir comentarios de la tarea
      },
    });
  }

  // Consultar comentarios por tarea
  async getCommentsByTask(taskId: number): Promise<Comentario[]> {
    return this.prisma.comentario.findMany({
      where: {
        tareaId: taskId,
      },
    });
  }
}
