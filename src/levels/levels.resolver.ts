import {
    Args,
    Mutation,
    // Parent,
     Query,
    // ResolveField,
//    Mutation,
//    ResolveField,
    Resolver,
} from '@nestjs/graphql'

//import {LevelEntity} from "./level.entity";
import {LevelsService} from "./levels.service";
// import {GroupsService} from "../groups/groups.service";
// import {GroupEntity} from "../groups/group.entity";
import {LevelInput} from "./level.input";
//import {LevelDto} from './level.dto';
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