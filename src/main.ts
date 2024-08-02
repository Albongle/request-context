import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestContextInterceptor } from './request-context/request-context.interceptor';
import { RequestContextService } from './request-context/request-context.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(
    new RequestContextInterceptor(new RequestContextService()),
  );
  await app.listen(3000);
}
bootstrap();
