import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {Role, RoleSchema} from "./role.schema"

// import {UserEntity} from "../users/user.entity";
// import {UsersService} from "../users/users.service";
// import {RoleEntity} from './role.entity';

import {RolesService} from "./roles.service";
import {RolesResolver} from "./roles.resolver";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }])
    ],
    providers: [RolesService, RolesResolver]
    // controllers: [],
    // exports: [],
})
export class RolesModule {}

