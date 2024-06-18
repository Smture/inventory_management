import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
    collection: 'users'
})
export class User extends Document {
    @Prop({ required: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    country_code: string;

    @Prop({ required: true, unique: true })
    mobile: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
