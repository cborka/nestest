import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import { GroupsService } from '../groups/groups.service'
import {UserInGroupEntity} from "./userInGroup.entity";
import {UserInGroupInput} from "./userInGroup.input";
import {GroupEntity} from "../groups/group.entity";
import {UserInGroupService} from "./userInGroup.service";
import {UsersService} from "../users/users.service";
import {UserEntity} from "../users/user.entity";

@Resolver(() => UserInGroupEntity)
export class UserInGroupResolver {
    constructor(
        private usersInGroupService: UserInGroupService,
        private usersService: UsersService,
        private groupsService: GroupsService,
    ) {}

    @Query((userInGroup) => [UserInGroupEntity])
    async userInGroup(): Promise<UserInGroupEntity[]> {
        return await this.usersInGroupService.findAll()
    }

    @ResolveField()
    async user(@Parent() userInGroup: UserInGroupEntity): Promise<UserEntity> {
        return this.usersService.findUserByUserInGroupId(userInGroup.id)
    }

    @ResolveField()
    async group(@Parent() userInGroup: UserInGroupEntity): Promise<GroupEntity>  {
        return this.groupsService.findGroupByUserInGroupId(userInGroup.id)
    }

    @Mutation(() => UserInGroupEntity)
    async createUserInGroup(
        @Args('input') input: UserInGroupInput,
    ): Promise<UserInGroupEntity> {
        return await this.usersInGroupService.createUserInGroup(input)
    }
}
