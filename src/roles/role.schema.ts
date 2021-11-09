import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
//import {Document, Types} from 'mongoose';
//import {User} from "../users/user.schema";

export type RoleDocument = Role & Document;

export const ROLE_COLLECTION_NAME = 'role'

@Schema({ collection: ROLE_COLLECTION_NAME })
@ObjectType({ description: "Role" })
export class Role {

    @Field((type) => ID)
    _id: string;

    @Field()
    @Prop()
    name: string;

    // @Prop({ type: Types.ObjectId, required: false, ref: 'User' })
    // level: User[]

}
export const RoleSchema = SchemaFactory.createForClass(Role);
