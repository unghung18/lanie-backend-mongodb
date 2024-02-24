import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ColorsModule } from './colors/colors.module';
import { ProductsModule } from './products/products.module';
import { CollectionsModule } from './collections/collections.module';
import { LoggerMiddleware } from './logger.middleware';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nest'),
    ConfigModule.forRoot(),
    AuthModule,
    ColorsModule,
    ProductsModule,
    CollectionsModule,
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'api/auth/get-profile', method: RequestMethod.GET }, UsersController);
  }
}
