import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3001;

  
  //prefix
  const globalPrefix = 'api/v1';
  app.setGlobalPrefix(globalPrefix);


  //enable cors
  app.enableCors();

  //validation pipe
  app.useGlobalPipes(new ValidationPipe());



  const options = new DocumentBuilder()
    .setTitle('Api Documentation')
    .setDescription('Api Documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
}
bootstrap();