import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LevelDocument = Level & Document;

export const LEVEL_COLLECTION_NAME = 'level'

@Schema({ collection: LEVEL_COLLECTION_NAME })
@ObjectType({ description: 'level' })
export class Level {

    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop()
    name: string;
}

export const LevelSchema = SchemaFactory.createForClass(Level);
