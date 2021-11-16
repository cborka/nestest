import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

//import {GroupEntity} from "./group.entity";

// import {GroupsService} from "./groups.service";
// import {LevelEntity} from "../levels/level.entity";
import {LevelsService} from "../levels/levels.service";
// import {UsersService} from '../users/users.service';
// import {GroupInput} from "./group.input";

import {Group} from "./group.schema";
import {GroupsService} from "./groups.service";
import {GroupInput} from "./group.input";
import {Level} from "../levels/level.schema";
import {User} from "../users/user.schema";
import {UsersService} from "../users/users.service";

@Resolver(() =>Group)
export class GroupsResolver {
    constructor(
        private groupsService: GroupsService,
        private levelsService: LevelsService,
        private usersService: UsersService
    ) {}

    @Query((groups) => [Group])
    async groups(): Promise<Group[]> {
        return await this.groupsService.findAll()
    }

    @ResolveField()
    async level(@Parent() group: Group): Promise<Level | undefined | null> {
        return this.levelsService.findOneById(group.levelId);
    }

    @ResolveField()
    async users(@Parent() group: Group): Promise<User[]> {
        return await this.usersService.findUsersByGroupId(group._id);
    }



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