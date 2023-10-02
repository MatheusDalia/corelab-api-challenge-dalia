import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // Enable CORS
    cors: true,

    logger: ['error', 'warn', 'debug', 'log', 'verbose'],
  });

  // Set up the global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      errorHttpStatusCode: 422,
    }),
  );

  // Set up Swagger
  const config = new DocumentBuilder()
    .setTitle('Nest.js Example API')
    .setDescription('The description of the API.')
    .setVersion('1.0')
    .addTag('nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3333);
  console.log('📦 Server running on http://localhost:3333');
  console.log('📚 Swagger UI available at http://localhost:3333/api-docs');
}
bootstrap();
