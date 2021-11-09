// import {
//     Args,
//     Mutation,
//     Parent,
//     Query,
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