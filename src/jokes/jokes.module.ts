import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {Joke, JokeSchema} from "./joke.schema"

import {JokesService} from "./jokes.service";
import {JokesResolver} from "./jokes.resolver";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Joke.name, schema: JokeSchema }])
    ],
    providers: [JokesService, JokesResolver]
    // controllers: [],
    // exports: [],
})
export class JokesModule {}