import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {Joke, JokeSchema} from "./joke.schema"

import {JokesService} from "./jokes.service";
import {JokesResolver} from "./jokes.resolver";
import {User, UserSchema} from "../users/user.schema";
import {UsersService} from "../users/users.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Joke.name, schema: JokeSchema },
            { name: User.name, schema: UserSchema },

        ])
    ],
    providers: [JokesService, JokesResolver, UsersService]
    // controllers: [],
    // exports: [],
})
export class JokesModule {}