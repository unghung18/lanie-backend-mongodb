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
import { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';
import * as mongoose from 'mongoose';
export type CollectionDocument = HydratedDocument<Collection>;
export declare class Collection {
    title: string;
    description: string;
    products: Product[];
    images: string[];
    banner_img: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const CollectionSchema: mongoose.Schema<Collection, mongoose.Model<Collection, any, any, any, mongoose.Document<unknown, any, Collection> & Collection & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Collection, mongoose.Document<unknown, {}, mongoose.FlatRecord<Collection>> & mongoose.FlatRecord<Collection> & {
    _id: mongoose.Types.ObjectId;
}>;
