import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// This is the entry point of the application
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Create the NestJS application instance
  await app.listen(process.env.PORT ?? 3000); // Start the application
}
bootstrap(); // Call the bootstrap function to run the application
