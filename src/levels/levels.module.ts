import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";

import {LevelsService} from "./levels.service";
import {LevelEntity} from "./level.entity";
import {GroupEntity} from "../groups/group.entity";
import {GroupsService} from "../groups/groups.service";
import {LevelsResolver} from "./levels.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([GroupEntity, LevelEntity])],
    providers: [GroupsService, LevelsService, LevelsResolver]
})
export class LevelsModule {}
