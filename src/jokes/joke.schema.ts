import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';

import {User} from "../users/user.schema";

export type JokeDocument = Joke & Document;

export const JOKES_COLLECTION_NAME = 'jokes'

@Schema({ collection: JOKES_COLLECTION_NAME })
@ObjectType({ description: "Joke" })
export class Joke {

    @Field((type) => ID, {name: "id"})
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    text: string;

    @Field()
    @Prop()
    rate: number;

    @Field()
    @Prop()
    like: number;

    @Field()
    @Prop()
    view: string;

    @Field()
    @Prop()
    userId: string

    @Field(type => User, {nullable: true})
    @Prop({ type: Types.ObjectId, required: false, ref: 'User' })
    user: User


}
export const JokeSchema = SchemaFactory.createForClass(Joke);
