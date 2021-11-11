import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

import {Group} from "../groups/group.schema";

export type LevelDocument = Level & Document;

export const LEVELS_COLLECTION_NAME = 'levels'

@Schema({ collection: LEVELS_COLLECTION_NAME })
@ObjectType({ description: 'levels' })
export class Level {

    @Field((type) => ID, {name: "id"})
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field(type => Group, {nullable: true})
    group: Group

}

export const LevelSchema = SchemaFactory.createForClass(Level);
