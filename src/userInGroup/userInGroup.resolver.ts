import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import {UserInGroupInput} from "./userInGroup.input";
import {UserInGroupService} from "./userInGroup.service";
import {UserInGroup} from "./userInGroup.schema";
import {User} from "../users/user.schema";
import {Group} from "../groups/group.schema";
import {UsersService} from "../users/users.service";
import {GroupsService} from "../groups/groups.service";

@Resolver(() => UserInGroup)
export class UserInGroupResolver {
    constructor(
        private usersInGroupService: UserInGroupService,
        private usersService: UsersService,
        private groupsService: GroupsService,

    ) {}

    @Query((userInGroup) => [UserInGroup])
    async userInGroup(): Promise<UserInGroup[]> {
        return await this.usersInGroupService.findAll()
    }

    @ResolveField()
    async user(@Parent() userInGroup: UserInGroup): Promise<User | null> {
        return this.usersService.findOneById(userInGroup.userId)
//        return this.usersInGroupService.findUserByUserInGroupId(userInGroup._id)
    }

    @ResolveField()
    async group(@Parent() userInGroup: UserInGroup): Promise<Group | null>  {
        return this.groupsService.findOneById(userInGroup.groupId)
//        return this.usersInGroupService.findGroupByUserInGroupId(userInGroup._id)
    }

    @Mutation(() => UserInGroup)
    async createUserInGroup(
        @Args('input') input: UserInGroupInput,
    ): Promise<UserInGroup> {
        return await this.usersInGroupService.createUserInGroup(input)
    }
}
