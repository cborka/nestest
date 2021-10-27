import { NotFoundException } from '@nestjs/common'
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql'
import { Joke, JokeCategorys } from './joke.model'
import { JokesService } from './jokes.service'

@Resolver((of) => Joke)
export class JokesResolver {
    constructor(private readonly jokesService: JokesService) {}

    @Query((returns) => Joke)
    async joke(@Args('cat') cat: JokeCategorys): Promise<Joke> {
        return await this.jokesService.getJoke(cat)
    }

    // @Query((returns) => Joke)
    // async jokeAll(): Promise<Joke> {
    //     return await this.jokesService.getAnyJoke()
    // }
}
