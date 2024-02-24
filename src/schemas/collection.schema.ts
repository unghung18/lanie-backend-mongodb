import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';
import * as mongoose from 'mongoose';

export type CollectionDocument = HydratedDocument<Collection>;

@Schema({ timestamps: true })
export class Collection {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];

    @Prop({ required: true })
    images: string[];

    @Prop({ required: true })
    banner_img: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const CollectionSchema = SchemaFactory.createForClass(Collection);