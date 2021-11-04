import {
    Parent,
    Query,
    ResolveField,
//    Mutation,
//    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import {UserEntity} from "../users/entities/user.entity";
import {UsersService} from "../users/users.service";
import {JokeEntity} from './joke.entity';
import {JokesService} from "./jokes.service";

@Resolver(() =>JokeEntity)
export class JokesResolver {
    constructor(
        private jokesService: JokesService,
        private usersService: UsersService
    ) {}

    @Query((jokes) => [JokeEntity])
    async jokes(): Promise<JokeEntity[]> {
        return await this.jokesService.findAll()
    }

    @ResolveField()
    async user(@Parent() joke: JokeEntity): Promise<UserEntity | undefined> {
        return this.usersService.findOneById(joke.userId);
    }
}