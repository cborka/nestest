import {
    Args,
    Mutation,
    // Args,
    // Mutation,
    // Parent,
    Query,
    // ResolveField,
    Resolver,
} from '@nestjs/graphql'

//import {GroupEntity} from "./group.entity";

// import {GroupsService} from "./groups.service";
// import {LevelEntity} from "../levels/level.entity";
// import {LevelsService} from "../levels/levels.service";
// import {UsersService} from '../users/users.service';
// import {GroupInput} from "./group.input";

import {Group} from "./group.schema";
import {GroupsService} from "./groups.service";
import {GroupInput} from "./group.input";

@Resolver(() =>Group)
export class GroupsResolver {
    constructor(
        private groupsService: GroupsService,
//        private levelsService: LevelsService,
//        private usersService: UsersService
    ) {}

    @Query((groups) => [Group])
    async groups(): Promise<Group[]> {
        return await this.groupsService.findAll()
    }

    // @ResolveField()
    // async level(@Parent() group: GroupEntity): Promise<LevelEntity | undefined> {
    //     return this.levelsService.findOneById(group.levelId);
    // }
    //
    // @ResolveField()
    // async users(@Parent() group: GroupEntity) {
    //     return this.usersService.findUsersByGroupId(group.id);
    // }

    @Mutation(() => Group)
    async createGroup(
        @Args('input') input: GroupInput,
    ): Promise<Group> {
        return await this.groupsService.createGroup(input)
    }

}