import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Product } from './product.schema';
import * as mongoose from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
    @Prop({ required: true })
    customer_name: string;

    @Prop({ required: true })
    customer_phoneNumber: string;

    @Prop({ required: true })
    shipping_address: string;

    @Prop({ required: true })
    order_date: Date;

    @Prop({ enum: ["PENDING", "PROCESSING", "COMPLETED", "CANCELLED"], default: "PENDING" })
    status: string;

    @Prop({ required: true })
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        order_color: {
            order_colorName: string;
            order_size: number;
            order_quantity: number;
        }
        totalPrice: number;
    }];

    @Prop({ required: true })
    total_amount: number;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);