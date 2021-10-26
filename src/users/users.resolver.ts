import { NotFoundException } from '@nestjs/common'
import {
    Args,
    Int,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'
import { User } from './models/user.model'
import { UsersService } from './users.service'

@Resolver((of) => User)
export class UsersResolver {
    constructor(private usersService: UsersService) {}
    @Query((returns) => User)
    async user(@Args('id', { type: () => Int }) id: number) {
        const user = await this.usersService.findOneById(String(id))
        if (!user) {
            throw new NotFoundException(id)
        }
        return user

        //        return this.usersService.findOneById(String(id));
    }

    // @ResolveField()
    // async posts(@Parent() author: User) {
    //     const { id } = author;
    //     return this.postsService.findAll({ authorId: id });
    // }
}
