import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import {GroupsService} from "../groups/groups.service";
import {GroupEntity} from "../groups/group.entity";
import {UserInGroupService} from "./userInGroup.service";
import {UserInGroupResolver} from "./userInGroup.resolver";
import {UserEntity} from "../users/user.entity";
import {UsersService} from "../users/users.service";
import {UserInGroupEntity} from "./userInGroup.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserInGroupEntity, UserEntity, GroupEntity])],
    controllers: [],
    providers: [UserInGroupService, UsersService, GroupsService, UserInGroupResolver],
    exports: [],
})
export class UserInGroupModule {}