import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';

import {User} from '../users/user.schema';

export type RoleDocument = Role & Document;

export const ROLES_COLLECTION_NAME = 'roles'

@Schema({ collection: ROLES_COLLECTION_NAME })
@ObjectType({ description: "Role" })
export class Role {

    @Field((type) => ID, {name: "id"})
    _id: string;

    @Field()
    @Prop()
    name: string;

    @Field(type => [User])
    users: User[]

}
export const RoleSchema = SchemaFactory.createForClass(Role);
