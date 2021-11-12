import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {UserInGroup, UserInGroupSchema} from "./userInGroup.schema";
import {Group, GroupSchema} from "../groups/group.schema";
import {User, UserSchema} from "../users/user.schema";
import {GroupsService} from "../groups/groups.service";
import {UsersService} from "../users/users.service";
import {UserInGroupResolver} from "./userInGroup.resolver";
import {UserInGroupService} from "./userInGroup.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: UserInGroup.name, schema: UserInGroupSchema },
            { name: User.name, schema: UserSchema },
            { name: Group.name, schema: GroupSchema },
        ])
    ],
    providers: [UserInGroupService, UserInGroupResolver, GroupsService, UsersService],
    controllers: [],
    exports: [],
})
export class UserInGroupModule {}