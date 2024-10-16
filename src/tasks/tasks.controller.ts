import { Controller, Get, Post, Body, Query, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Tarea, Comentario } from '@prisma/client';
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto';
import { CreateCommentDto } from './dto/create-comment.dto/create-comment.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // Crear una nueva tarea
  @Post('create')
  @UsePipes(new ValidationPipe())  // Validar los datos de entrada
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Tarea> {
    return this.tasksService.createTask(createTaskDto);
  }

  // Crear un comentario
  @Post('comment')
  @UsePipes(new ValidationPipe())  // Validar los datos de entrada
  async createComment(@Body() createCommentDto: CreateCommentDto): Promise<Comentario> {
    return this.tasksService.createComment(createCommentDto);
  }

  // Obtener todas las tareas con filtros
  @Get('all')
  async getTasks(@Query() filters: any): Promise<Tarea[]> {
    return this.tasksService.getTasks(filters);
  }

  // Obtener comentarios por tarea
  @Get(':id/comments')
  async getCommentsByTask(@Param('id') id: number): Promise<Comentario[]> {
    return this.tasksService.getCommentsByTask(id);
  }
}
