import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document, Types} from 'mongoose';

import {Role} from "../roles/role.schema";
import {Status} from "../statuses/status.schema";
import {Joke} from "../jokes/joke.schema";

export type UserDocument = User & Document;

export const USERS_COLLECTION_NAME = 'users'

@Schema({ collection: USERS_COLLECTION_NAME, timestamps: { createdAt: 'createdAt', updatedAt: false } })
@ObjectType({ description: "User" })
export class User {

    @Field((type) => ID, {name: "id"})
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field()
    @Prop()
    surName: string;

    @Field()
    @Prop()
    login: string;

    @Field()
    @Prop()
    password: string;

    @Prop({ required: false })
    createdAt?: number

    @Field({nullable: true})
    @Prop()
    roleId: string

    @Field()
    @Prop()
    statusId: string

    @Field(type => Role, {nullable: true})
    @Prop({ type: Types.ObjectId, required: false, ref: 'Role' })
    role: Role

    @Field(type => Status, {nullable: true})
    @Prop({ type: Types.ObjectId, required: false, ref: 'Status' })
    status: Status

    @Field(type => [Joke])
    jokes: Joke[]

}
export const UserSchema = SchemaFactory.createForClass(User);
