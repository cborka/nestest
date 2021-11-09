import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
//import {Document, Types} from 'mongoose';
//import {User} from "../users/user.schema";

export type JokeDocument = Joke & Document;

export const JOKE_COLLECTION_NAME = 'joke'

@Schema({ collection: JOKE_COLLECTION_NAME })
@ObjectType({ description: "Joke" })
export class Joke {

    @Field((type) => ID)
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

    // @Prop({ type: Types.ObjectId, required: false, ref: 'User' })
    // level: User[]

}
export const JokeSchema = SchemaFactory.createForClass(Joke);
