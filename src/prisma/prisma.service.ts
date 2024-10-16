import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  
  // Inicializa Prisma cuando se inicie el módulo
  async onModuleInit() {
    await this.$connect();
  }

  // Desconecta Prisma cuando se destruya el módulo
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
