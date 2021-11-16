import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import {GroupsService} from "./groups.service";
import {GroupsResolver} from "./groups.resolver";

// import {LevelsService} from "../levels/levels.service";
// import {LevelEntity} from "../levels/level.entity";
// import {UsersService} from "../users/users.service";
// import {UserEntity} from "../users/user.entity";
// import {UserInGroupService} from "../userInGroup/userInGroup.service";
// import {UserInGroupEntity} from "../userInGroup/userInGroup.entity";
import {Level, LevelSchema} from "../levels/level.schema";
import {Group, GroupSchema} from "./group.schema";
import {LevelsService} from "../levels/levels.service";
import {UsersService} from "../users/users.service";
import {User, UserSchema} from "../users/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Group.name, schema: GroupSchema },
            { name: Level.name, schema: LevelSchema },
            { name: User.name, schema: UserSchema }
        ])
    ],
    providers: [GroupsService, GroupsResolver, LevelsService, UsersService]
//    providers: [GroupsService, LevelsService, UsersService, UserInGroupService, GroupsResolver, LevelEntity]
})
export class GroupsModule {}
