import { ValidationPipe } from '../pipes/validation.pipe';
import { ResponseInterceptor } from '../interceptors/response.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default function appMiddleware(app: any) {
  //cors
  app.enableCors();
  //documentation
  const config = new DocumentBuilder()
    .setTitle('Stereo Media')
    .setDescription('The Media API documentation')
    .setVersion('1.0')
    .addTag('Media')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  //validation pipes
  app.useGlobalPipes(new ValidationPipe());
  //filter
  //response interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());
}
