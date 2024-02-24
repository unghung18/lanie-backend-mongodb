import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create-color.dto';
import { Response } from 'express';
export declare class ColorsController {
    private readonly colorsService;
    constructor(colorsService: ColorsService);
    create(body: CreateColorDto, res: Response): Promise<any>;
    findAll(query: any, res: Response): Promise<any>;
    findOne(id: string, res: Response): Promise<any>;
    remove(id: string, res: Response): Promise<any>;
}
