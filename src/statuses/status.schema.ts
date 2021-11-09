import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatusDocument = Status & Document;

export const STATUS_COLLECTION_NAME = 'status'

@Schema({ collection: STATUS_COLLECTION_NAME })
@ObjectType({ description: 'status' })
export class Status {

    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop()
    name: string;
}

export const StatusSchema = SchemaFactory.createForClass(Status);