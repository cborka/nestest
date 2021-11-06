import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

import {GroupEntity} from "./group.entity";
import {GroupsService} from "./groups.service";
import {GroupsResolver} from "./groups.resolver";
import {LevelsService} from "../levels/levels.service";
import {LevelEntity} from "../levels/level.entity";
import {UsersService} from "../users/users.service";
import {UserEntity} from "../users/user.entity";
import {UserInGroupService} from "../userInGroup/userInGroup.service";
import {UserInGroupEntity} from "../userInGroup/userInGroup.entity";

@Module({
    imports: [TypeOrmModule.forFeature([GroupEntity, LevelEntity, UserEntity, UserInGroupEntity])],
    providers: [GroupsService, LevelsService, UsersService, UserInGroupService, GroupsResolver]
})
export class GroupsModule {}
