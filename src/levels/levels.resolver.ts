import {
    Args,
    Mutation,
    Parent,
    ResolveField,
    Query,
    Resolver,
} from '@nestjs/graphql'

import {LevelsService} from "./levels.service";
import {LevelInput} from "./level.input";
import {Level} from "./level.schema";
import {Group} from "../groups/group.schema";
import {GroupsService} from "../groups/groups.service";


@Resolver(() =>Level)
export class LevelsResolver {
    constructor(
        private levelsService: LevelsService,
        private groupsService: GroupsService,
    ) {}

    @Query((levels) => [Level])
    async levels(): Promise<Level[]> {
        return await this.levelsService.findAll()
    }

    @ResolveField()
    async group(@Parent() level: Level): Promise<Group | null> {
        return this.groupsService.findOneByLevelId(level._id);
    }


    @Mutation(() => Level)
    async createLevel(
        @Args('input') input: LevelInput,
    ): Promise<Level | any> {
        return await this.levelsService.createLevel(input)
    }
}