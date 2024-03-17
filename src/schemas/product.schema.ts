import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Color } from './color.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    category: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    tags: string[];

    @Prop({ required: true })
    images: string[];

    @Prop({ enum: [0, 10, 20, 30, 40, 50] })
    sale: number;

    @Prop({ required: true })
    sizes: {
        name: string,
        quantity: number
    }[]

    @Prop({ required: true, type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Color' }] })
    colors: Color[];

    @Prop({ required: true })
    totalQuantity: number;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);