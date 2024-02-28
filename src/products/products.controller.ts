import { Controller, Get, Post, Body, Param, Delete, Res, Put, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Response, query } from 'express';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  create(@Body() body: CreateProductDto, @Res() res: Response) {
    return this.productsService.create(body, res);
  }

  @Get()
  findAll(@Query() query, @Res() res: Response) {
    return this.productsService.findAll(query, res);
  }

  @Get("/latest-products")
  getLatestProducts(@Res() res: Response) {
    return this.productsService.getLatestProducts(res);
  }

  @Get("/sale")
  getSaleProducts(@Query() query, @Res() res: Response) {
    return this.productsService.getSaleProducts(query, res);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    return this.productsService.findOne(id, res);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: CreateProductDto, @Res() res: Response) {
    return this.productsService.update(id, body, res);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return this.productsService.remove(id, res);
  }

  @Post("search")
  searchProducts(@Query() query, @Res() res: Response) {
    return this.productsService.searchProducts(query, res);
  }


}
