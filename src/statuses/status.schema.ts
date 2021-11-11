import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import {User} from "../users/user.schema";

export type StatusDocument = Status & Document;

export const STATUSS_COLLECTION_NAME = 'statuss'

@Schema({ collection: STATUSS_COLLECTION_NAME })
@ObjectType({ description: 'status' })
export class Status {

    @Field((type) => ID, {name: "id"})
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field(type => [User])
    users: User[]

}

export const StatusSchema = SchemaFactory.createForClass(Status);