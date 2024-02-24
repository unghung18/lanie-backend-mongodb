import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ColorDocument = HydratedDocument<Color>;

@Schema({ timestamps: true })
export class Color {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    color: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const ColorSchema = SchemaFactory.createForClass(Color);