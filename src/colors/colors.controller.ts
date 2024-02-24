import { Controller, Get, Post, Body, Param, Delete, Res, Query } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { Response } from 'express';

@Controller('api/colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) { }

  @Post()
  create(@Body() body: CreateColorDto, @Res() res: Response) {
    return this.colorsService.create(body, res);
  }

  @Get()
  findAll(@Query() query, @Res() res: Response) {
    return this.colorsService.findAll(query, res);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.colorsService.findOne(id, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return this.colorsService.remove(id, res);
  }
}
