import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Response } from 'express';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(body: CreateProductDto, res: Response): Promise<any>;
    findAll(query: any, res: Response): Promise<any>;
    findOne(id: string, res: Response): Promise<any>;
    update(id: string, body: CreateProductDto, res: Response): Promise<any>;
    remove(id: string, res: Response): Promise<any>;
    searchProducts(query: any, res: Response): Promise<any>;
}
