import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { Response } from 'express';
export declare class CollectionsController {
    private readonly collectionsService;
    constructor(collectionsService: CollectionsService);
    create(body: CreateCollectionDto, res: Response): Promise<any>;
    findAll(res: Response): Promise<any>;
    findOne(id: string, res: Response): Promise<any>;
    update(id: string, body: CreateCollectionDto, res: Response): Promise<any>;
    remove(id: string, res: Response): Promise<any>;
}
