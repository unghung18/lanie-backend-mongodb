import { Body, Controller, Delete, Get, Param, Post, Put, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  create(@Body() body: CreateOrderDto, @Res() res: Response) {
    return this.ordersService.create(body, res);
  }

  @Get()
  findAll(@Query() query, @Res() res: Response) {
    return this.ordersService.findAll(query, res);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.ordersService.findOne(id, res);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateOrderDto, @Res() res: Response) {
    return this.ordersService.update(id, body, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
