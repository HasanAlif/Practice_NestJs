import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction, Request, Response } from 'express';


function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('Global Middleware: Request received');
  next();

}

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware);
  await app.listen(3000);
}
bootstrap();
