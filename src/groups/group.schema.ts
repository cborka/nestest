import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';

import {Level} from '../levels/level.schema';

export type GroupDocument = Group & Document;

export const GROUP_COLLECTION_NAME = 'role'

@Schema({ collection: GROUP_COLLECTION_NAME })
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

    @Prop({ type: Types.ObjectId, required: false, ref: 'Level' })
    level: Level
}

export const GroupSchema = SchemaFactory.createForClass(Group);
