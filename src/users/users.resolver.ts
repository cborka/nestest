import { NotFoundException } from '@nestjs/common'
import {
    Args,
    Int,
    Parent,
    Query,
    Mutation,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import { UserInput } from './user.input'
import { User } from './users.entity'
import { UsersService } from './users.service'

@Resolver((of) => User)
export class UsersResolver {
    constructor(private usersService: UsersService) {}

    @Query((returns) => User)
    async user1(@Args('id', { type: () => Int }) id: number) {
        const user1 = await this.usersService.findOneById(String(id))
        if (!user1) {
            throw new NotFoundException(id)
        }
        return user1

        //        return this.usersService.findOneById(String(id));
    }

    @Query((returns) => [User])
    async user(@Args('name') name: string) {
        const user = await this.usersService.findByName(name)
        if (!user) {
            throw new NotFoundException(name)
        }
        return user
    }

    @Query((users) => [User])
    users(): Promise<User[]> {
        return this.usersService.findAll()
    }

    // @Mutation(() => User)
    // async createUser(@Args('input') input: UserInput): Promise<User> {
    //     const response = await this.usersService.createUser(input)
    //     return response
    // }

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
