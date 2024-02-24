import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, ValidationError, HttpException } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe(
    {
      // Custom response error
      exceptionFactory: (validationErrors: ValidationError[] = []) => {

        const arrayError = validationErrors.map((error) => ({
          [error.property]: (Object.values(error.constraints).join()).charAt(0).toUpperCase() + (Object.values(error.constraints).join(', ')).slice(1),
        }))

        return new HttpException({
          error: arrayError,
          message: "Invalid input"
        }, 400);
      },
      // Ngăn chặn các trường không xác định hoặc không có decorator trong dto
      whitelist: true,
      transform: true,
      // Dừng ở lỗi đầu tiên khi validate một field nào đó
      stopAtFirstError: true,
      skipMissingProperties: true
    }
  ));

  await app.listen(8080)
}
bootstrap();
