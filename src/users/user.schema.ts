import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
//import {Document, Types} from 'mongoose';

export type UserDocument = User & Document;

export const USER_COLLECTION_NAME = 'user'

@Schema({ collection: USER_COLLECTION_NAME, timestamps: { createdAt: 'createdAt', updatedAt: false } })
@ObjectType({ description: "User" })
export class User {

    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    sudName: string;

    @Field()
    @Prop()
    login: string;

    @Field()
    @Prop()
    password: string;

    @Prop({ required: false })
    createdAt: number

    // @Prop({ type: Types.ObjectId, required: false, ref: 'User' })
    // level: User[]

}
export const UserSchema = SchemaFactory.createForClass(User);
