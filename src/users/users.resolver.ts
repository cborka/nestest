//import { NotFoundException } from '@nestjs/common'
import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import { UserInput } from './user.input'
import { UserEntity } from './user.entity'
import { UsersService } from './users.service'
import { StatusesService } from '../statuses/statuses.service'
import { GroupsService } from '../groups/groups.service'
import {RolesService} from "../roles/roles.service";

@Resolver(() => UserEntity)
export class UsersResolver {
    constructor(
        private usersService: UsersService,
        private statusesService: StatusesService,
        private rolesService: RolesService,
        private groupsService: GroupsService,
    ) {}

    // @Query((returns) => UserEntity)
    // async user1(@Args('id', { type: () => Int }) id: number) {
    //     const user1 = await this.usersService.findOneById(String(id))
    //     if (!user1) {
    //         throw new NotFoundException(id)
    //     }
    //     return user1
    //
    //     //        return this.usersService.findOneById(String(id));
    // }
    //
    // @Query((returns) => [User])
    // async user(@Args('name') name: string) {
    //     const user = await this.usersService.findByName(name)
    //     if (!user) {
    //         throw new NotFoundException(name)
    //     }
    //     return user
    // }

    @Query((users) => [UserEntity])
    async users(): Promise<UserEntity[]> {
        return await this.usersService.findAll()
    }

    @ResolveField()
    async status(@Parent() user: UserEntity) {
        return this.statusesService.findOneById(user.statusId)
    }

    @ResolveField()
    async role(@Parent() user: UserEntity) {
        return this.rolesService.findOneById(user.roleId)
    }

    @ResolveField()
    async groups(@Parent() user: UserEntity) {
        return this.groupsService.findGroupsByUserId(user.id)
    }

    @Mutation(() => UserEntity)
    async createUser(
        @Args('input') input: UserInput,
    ): Promise<UserEntity> {
        return await this.usersService.createUser(input)
    }

    // @ResolveField()
    // async posts(@Parent() author: User) {
    //     const { id } = author;
    //     return this.postsService.findAll({ authorId: id });
    // }
}

// @Mutation(() => UserType)
// async signUp(@Args('input') input: CreateUserInput): Promise<UserType> {
//     const response = await this._authService.signUp(input)
//
//     return response
// }

// async signUp(input: UserDto): Promise<UserEntity> {
//     const user = await this._usersService.createUser(input)
//
//     return user
// }
