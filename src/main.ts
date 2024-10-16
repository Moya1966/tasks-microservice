import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.task' }); 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT, 10));
  console.log(`Tasks microservice is running on HTTP port ${process.env.PORT}`);  
}
bootstrap();
