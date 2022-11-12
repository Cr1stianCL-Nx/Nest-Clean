import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const config = app.get(ConfigService);
  const globalPrefix = 'api';

  setUpCors(app, config);
  setUpHelmet(app, config);
  setUpSwagger(app, config);
  const port = config.get('port');
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port, () => {
    Logger.log(
      'Service listening at http://localhost:' + port + '/' + globalPrefix,
      'BootstrapFunction',
    );
  });
}

function setUpCors(app: NestExpressApplication, config: ConfigService) {
  app.enableCors({
    origin: config.get('cors') || '*',
    methods: 'GET,POST',
  });
}

function setUpHelmet(app: NestExpressApplication, config: ConfigService) {
  Logger.log(
    'Helmet config enabled: \x1b[35m' + config.get<boolean>('helmet'),
    'BootstrapFunction',
  );
  if (config.get<boolean>('helmet')) {
    Logger.log('Helmet Environment Initialized', 'BootstrapFunction');
    app.use(helmet());
  }
}

function setUpSwagger(app: NestExpressApplication, config: ConfigService) {
  Logger.log(
    'Swagger config enabled: \x1b[35m' + config.get<boolean>('swagger.enabled'),
    'BootstrapFunction',
  );
  if (config.get<boolean>('swagger.enabled')) {
    const options = new DocumentBuilder()
      .setTitle('Insert a document title')
      .setDescription('Insert a description')
      .setVersion('1.2.6')
      .addTag('')
      .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(config.get<string>('swagger.url'), app, document);
  }
}

bootstrap();
