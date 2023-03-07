import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appMiddleware from './middlewares/middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  appMiddleware(app);
  await app.listen(3000);
}
bootstrap();
