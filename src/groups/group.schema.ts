import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GroupDocument = Group & Document;

@Schema()
@ObjectType({ description: 'group' })
export class Group {

    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    shortName: string

    @Field()
    @Prop()
    levelId: string
}

export const GroupSchema = SchemaFactory.createForClass(Group);
