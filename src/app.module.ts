import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TasksModule],
  controllers: [AppController, TasksController],
  providers: [AppService, TasksService, PrismaService],
})
export class AppModule {}
