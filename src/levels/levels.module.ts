import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

import {LevelsService} from "./levels.service";
import {LevelsResolver} from "./levels.resolver";
import {Level, LevelSchema} from "./level.schema";

import {GroupsService} from "../groups/groups.service";
import {GroupsModule} from "../groups/groups.module";
import {Group, GroupSchema} from "../groups/group.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Level.name, schema: LevelSchema },
            { name: Group.name, schema: GroupSchema }
            ]),
        GroupsModule
    ],
    providers: [LevelsService, LevelsResolver, GroupsService]
})
export class LevelsModule {}
