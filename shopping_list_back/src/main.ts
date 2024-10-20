import 'reflect-metadata';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ExeptionFallBack } from './erros/ExeptionFallBack';

declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new ExeptionFallBack(app.get(HttpAdapterHost)));
  await app.listen(3001);
  const config = new DocumentBuilder()
    .setTitle('Shopping List')
    .setDescription('The Shopping List API description')
    .setVersion('1.0')
    .addTag('shopping-list')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
