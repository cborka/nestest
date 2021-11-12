import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';

import {User} from "../users/user.schema";
import {Group} from "../groups/group.schema";

export type UserInGroupDocument = UserInGroup & Document;

export const USER_IN_GROUPS_COLLECTION_NAME = 'user_in_groups'

@Schema({ collection: USER_IN_GROUPS_COLLECTION_NAME, timestamps: { createdAt: 'createdAt', updatedAt: false }  })
@ObjectType({ description: 'user_in_group' })
export class UserInGroup {

    @Field((type) => ID, {name: "id"})
    _id: string;

    @Prop({ required: false })
    createdAt?: number

    @Field()
    @Prop()
    userId: string

    @Field()
    @Prop()
    groupId: string

    @Field(type => User, {nullable: true})
    @Prop({ type: Types.ObjectId, required: false, ref: 'User' })
    user: User

    @Field(type => Group, {nullable: true})
    @Prop({ type: Types.ObjectId, required: false, ref: 'Group' })
    group: Group

    @Field(type => [Group], {nullable: true})
    @Prop({ type: Types.ObjectId, required: false, ref: 'Group' })
    groups: Group[]

}

export const UserInGroupSchema = SchemaFactory.createForClass(UserInGroup);
