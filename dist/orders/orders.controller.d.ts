import { Response } from 'express';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(body: CreateOrderDto, res: Response): Promise<any>;
    findAll(query: any, res: Response): Promise<any>;
    findOne(id: string): string;
    update(id: string, body: CreateOrderDto, res: Response): Promise<any>;
    remove(id: string): string;
}
