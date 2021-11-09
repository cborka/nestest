import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LevelDocument = Level & Document;

@Schema()
@ObjectType({ description: 'level' })
export class Level {

    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop()
    name: string;
}

export const LevelSchema = SchemaFactory.createForClass(Level);
