import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import {LevelsService} from "./levels.service";
// import {LevelEntity} from "./level.entity";
// import {GroupEntity} from "../groups/group.entity";
//import {GroupsService} from "../groups/groups.service";

import {LevelsResolver} from "./levels.resolver";

import {Level, LevelSchema} from "./level.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Level.name, schema: LevelSchema }])
    ],
    providers: [LevelsService, LevelsResolver]
//    providers: [GroupsService, LevelsService, LevelsResolver]
})
export class LevelsModule {}
