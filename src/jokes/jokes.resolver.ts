import {
    Args,
    Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql'

import {JokesService} from "./jokes.service";
import {JokeInput} from "./joke.input";
import {Joke} from "./joke.schema";


@Resolver(() =>Joke)
export class JokesResolver {
    constructor(
        private jokesService: JokesService,
        //        private groupsService: GroupsService,
    ) {}

    @Query((jokes) => [Joke])
    async jokes(): Promise<Joke[]> {
        return await this.jokesService.findAll()
    }

//     @ResolveField()
//     async users(@Parent() joke: JokeEntity): Promise<UserEntity[]> {
//         return this.usersService.findByJokeId(joke.id);
//     }

    @Mutation(() => Joke)
    async createJoke(
        @Args('input') input: JokeInput,
    ): Promise<Joke | any> {
        return await this.jokesService.create(input)
    }
}
//     ResolveField,
//     Resolver,
// } from '@nestjs/graphql'
//
// import {UserEntity} from "../users/user.entity";
// import {UsersService} from "../users/users.service";
// import {JokeEntity} from './joke.entity';
// import {JokesService} from "./jokes.service";
// import {JokeInput} from "./joke.input";
//
// @Resolver(() =>JokeEntity)
// export class JokesResolver {
//     constructor(
//         private jokesService: JokesService,
//         private usersService: UsersService
//     ) {}
//
//     @Query((jokes) => [JokeEntity])
//     async jokes(): Promise<JokeEntity[]> {
//         return await this.jokesService.findAll()
//     }
//
//     @ResolveField()
//     async user(@Parent() joke: JokeEntity): Promise<UserEntity | undefined> {
//         return this.usersService.findOneById(joke.userId);
//     }
//
//     @Mutation(() => JokeEntity)
//     async createJoke(
//         @Args('input') input: JokeInput,
//     ): Promise<JokeEntity | any> {
//         return await this.jokesService.createJoke(input)
//     }
// }