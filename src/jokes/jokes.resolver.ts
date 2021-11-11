import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import {JokesService} from "./jokes.service";
import {JokeInput} from "./joke.input";
import {Joke} from "./joke.schema";
import {User} from "../users/user.schema";
import {UsersService} from "../users/users.service";

@Resolver(() =>Joke)
export class JokesResolver {
    constructor(
        private jokesService: JokesService,
        private usersService: UsersService,
    ) {}

    @Query((jokes) => [Joke])
    async jokes(): Promise<Joke[]> {
        return await this.jokesService.findAll()
    }

    @ResolveField()
    async user(@Parent() joke: Joke): Promise<User | null> {
        return this.usersService.findOneById(joke.userId);
    }

    @Mutation(() => Joke)
    async createJoke(
        @Args('input') input: JokeInput,
    ): Promise<Joke | any> {
        return await this.jokesService.create(input)
    }
}
