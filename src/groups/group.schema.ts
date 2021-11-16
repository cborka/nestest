import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';

import {Level} from '../levels/level.schema';
import {User} from "../users/user.schema";

export type GroupDocument = Group & Document;

export const GROUPS_COLLECTION_NAME = 'groups'

@Schema({ collection: GROUPS_COLLECTION_NAME })
@ObjectType({ description: 'group' })
export class Group {

    @Field((type) => ID, {name: "id"})
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

    @Field(type => Level, {nullable: true})
    @Prop({ type: Types.ObjectId, required: false, ref: 'Level' })
    level: Level

    @Field(type => [User])
    @Prop({ type: Types.ObjectId, required: false, ref: 'User' })
    users: User[]

}

export const GroupSchema = SchemaFactory.createForClass(Group);
