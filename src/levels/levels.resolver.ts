import {
    Args,
    Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql'

import {LevelsService} from "./levels.service";
import {LevelInput} from "./level.input";
import {Level} from "./level.schema";


@Resolver(() =>Level)
export class LevelsResolver {
    constructor(
        private levelsService: LevelsService,
//        private groupsService: GroupsService,
    ) {}

    @Query((levels) => [Level])
    async levels(): Promise<Level[]> {
        return await this.levelsService.findAll()
    }

    //
    // @ResolveField()
    // async group(@Parent() level: LevelEntity): Promise<GroupEntity | undefined> {
    //     return this.groupsService.findOneByLevelId(level._id);
    // }
    //

    @Mutation(() => Level)
    async createLevel2(
        @Args('input') input: LevelInput,
    ): Promise<Level | any> {
        return await this.levelsService.create(input)
    }
}