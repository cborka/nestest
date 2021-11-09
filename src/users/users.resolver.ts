import {
    Args,
    Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql'

import {UsersService} from "./users.service";
import {UserInput} from "./user.input";
import {User} from "./user.schema";


@Resolver(() =>User)
export class UsersResolver {
    constructor(
        private usersService: UsersService,
        //        private groupsService: GroupsService,
    ) {}

    @Query((users) => [User])
    async users(): Promise<User[]> {
        return await this.usersService.findAll()
    }

//     @ResolveField()
//     async users(@Parent() user: UserEntity): Promise<UserEntity[]> {
//         return this.usersService.findByUserId(user.id);
//     }

    @Mutation(() => User)
    async createUser(
        @Args('input') input: UserInput,
    ): Promise<User | any> {
        return await this.usersService.create(input)
    }
}
// //import { NotFoundException } from '@nestjs/common'
// import {
//     Args,
//     Mutation,
//     Parent,
//     Query,
//     ResolveField,
//     Resolver,
// } from '@nestjs/graphql'
//
// import { UserInput } from './user.input'
// import { UserEntity } from './user.entity'
// import { UsersService } from './users.service'
// import { StatusesService } from '../statuses/statuses.service'
// import { GroupsService } from '../groups/groups.service'
// import { RolesService } from '../roles/roles.service'
// import { JokesService } from '../jokes/jokes.service'
//
// @Resolver(() => UserEntity)
// export class UsersResolver {
//     constructor(
//         private usersService: UsersService,
//         private statusesService: StatusesService,
//         private rolesService: RolesService,
//         private groupsService: GroupsService,
//         private jokesService: JokesService,
//     ) {}
//
//     @Query((users) => [UserEntity])
//     async users(): Promise<UserEntity[]> {
//         return await this.usersService.findAll()
//     }
//
//     @ResolveField()
//     async status(@Parent() user: UserEntity) {
//         return this.statusesService.findOneById(user.statusId)
//     }
//
//     @ResolveField()
//     async role(@Parent() user: UserEntity) {
//         return this.rolesService.findOneById(user.roleId)
//     }
//
//     @ResolveField()
//     async groups(@Parent() user: UserEntity) {
//         return this.groupsService.findGroupsByUserId(user.id)
//     }
//
//     @ResolveField()
//     async jokes(@Parent() user: UserEntity) {
//         return this.jokesService.findJokesByUserId(user.id)
//     }
//
//     @Mutation(() => UserEntity)
//     async createUser(@Args('input') input: UserInput): Promise<UserEntity> {
//         return await this.usersService.createUser(input)
//     }
// }