import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  });

  const config = new DocumentBuilder()
    .setTitle('CHNU pharmacy study project')
    .setDescription('API for study project')
    .setVersion('1.0')
    .addTag('CHNU-pharmacy')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Write Swagger JSON to a file
  writeFileSync('./swagger-output.json', JSON.stringify(document, null, 2));

  await app.listen(3000);
}
bootstrap();
