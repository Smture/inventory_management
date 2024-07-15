import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ collection: 'products' })
export class Product extends Document {

    @Prop({ required: true })
    name: string; // Product name

    @Prop({ required: true })
    description: string; // Product description

    // @Prop({ type: Schema.Types.ObjectId, ref: 'Category' }) // Reference to the Category document
    // categoryId: string;

    // @Prop({ type: Schema.Types.ObjectId, ref: 'Supplier' }) // Reference to the Supplier document
    // supplierId: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
