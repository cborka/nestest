import { NotFoundException } from '@nestjs/common'
import {
    Args,
    Int,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'
import { User } from './users.entity'
//import { User } from './models/user.model'
import { UsersService } from './users.service'
import { Recipe } from '../recipes/models/recipe.model'
import { RecipesArgs } from '../recipes/dto/recipes.args'

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

    // @ResolveField()
    // async posts(@Parent() author: User) {
    //     const { id } = author;
    //     return this.postsService.findAll({ authorId: id });
    // }
}
