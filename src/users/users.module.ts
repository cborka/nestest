import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {User, UserSchema} from "./user.schema"

import {UsersService} from "./users.service";
import {UsersResolver} from "./users.resolver";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    providers: [UsersService, UsersResolver]
    // controllers: [],
    // exports: [],
})
export class UsersModule {}