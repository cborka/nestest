import {
    Parent,
    Query,
    ResolveField,
//    Mutation,
//    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import {LevelEntity} from "./level.entity";
import {LevelsService} from "./levels.service";
import {GroupsService} from "../groups/groups.service";
import {GroupEntity} from "../groups/group.entity";


@Resolver(() =>LevelEntity)
export class LevelsResolver {
    constructor(
        private levelsService: LevelsService,
        private groupsService: GroupsService,
    ) {}

    @Query((levels) => [LevelEntity])
    async levels(): Promise<LevelEntity[]> {
        return await this.levelsService.findAll()
    }

    @ResolveField()
    async group(@Parent() level: LevelEntity): Promise<GroupEntity | undefined> {
        return this.groupsService.findOneByLevelId(level.id);
    }
}