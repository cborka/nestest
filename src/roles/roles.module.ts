import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {Role, RoleSchema} from "./role.schema"

import {RolesService} from "./roles.service";
import {RolesResolver} from "./roles.resolver";
import {UsersService} from "../users/users.service";
import {User, UserSchema} from "../users/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Role.name, schema: RoleSchema },
            { name: User.name, schema: UserSchema },
        ])
    ],
    providers: [RolesService, RolesResolver, UsersService]
    // controllers: [],
    // exports: [],
})
export class RolesModule {}

