/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Product } from 'src/schemas/product.schema';
import { Model } from 'mongoose';
export declare class ProductsService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(body: any, res: any): Promise<any>;
    findAll(query: any, res: any): Promise<any>;
    findOne(id: string, res: any): Promise<any>;
    update(id: string, body: any, res: any): Promise<any>;
    remove(id: string, res: any): Promise<any>;
    getLatestProducts(res: any): Promise<any>;
    searchProducts(query: any, res: any): Promise<any>;
}
