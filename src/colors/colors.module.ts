import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Color, ColorSchema } from 'src/schemas/color.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Color.name, schema: ColorSchema }])],
  controllers: [ColorsController],
  providers: [ColorsService],
})
export class ColorsModule { }
