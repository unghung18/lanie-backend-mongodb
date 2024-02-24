import { Controller, Get, Post, Body, Param, Delete, Put, Res } from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { Response } from 'express';

@Controller('api/collections')
export class CollectionsController {
  constructor(private readonly collectionsService: CollectionsService) { }

  @Post()
  create(@Body() body: CreateCollectionDto, @Res() res: Response) {
    return this.collectionsService.create(body, res);
  }

  @Get()
  findAll(@Res() res: Response) {
    return this.collectionsService.findAll(res);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.collectionsService.findOne(id, res);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateCollectionDto, @Res() res: Response) {
    return this.collectionsService.update(id, body, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return this.collectionsService.remove(id, res);
  }
}
