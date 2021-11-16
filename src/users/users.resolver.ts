import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import {UsersService} from "./users.service";
import {UserInput} from "./user.input";
import {User} from "./user.schema";
import {RolesService} from "../roles/roles.service";
import {StatusesService} from "../statuses/statuses.service";
import {Status} from "../statuses/status.schema";
import {Role} from "../roles/role.schema";
import {Joke} from "../jokes/joke.schema";
import {JokesService} from "../jokes/jokes.service";
import {Group} from '../groups/group.schema';
//import {UserInGroupService} from "../userInGroup/userInGroup.service";
import {GroupsService} from "../groups/groups.service";


@Resolver(() =>User)
export class UsersResolver {
    constructor(
        private usersService: UsersService,
        private rolesService: RolesService,
        private statusesService: StatusesService,
        private jokesService: JokesService,
//        private userInGroupService: UserInGroupService,
        private groupsService: GroupsService,
    ) {}

    @Query((users) => [User])
    async users(): Promise<User[]> {
        return await this.usersService.findAll()
    }


    @ResolveField()
    async status(@Parent() user: User): Promise<Status | null> {
        return this.statusesService.findOneById(user.statusId)
    }

    @ResolveField()
    async role(@Parent() user: User): Promise<Role | null> {
        return this.rolesService.findOneById(user.roleId)
    }

    @ResolveField()
    async jokes(@Parent() user: User): Promise<Joke[]> {
        return this.jokesService.findJokesByUserId(user._id);
    }

    @ResolveField()
    async groups(@Parent() user: User): Promise<Group[]> {
        return await this.groupsService.findGroupsByUserId(user._id);
    }



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