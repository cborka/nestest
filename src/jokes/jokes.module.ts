import { Module } from '@nestjs/common'
import { JokesResolver } from './jokes.resolver'
import { JokesService } from './jokes.service'
import {JokesController} from "./jokes.controller";

@Module({
    controllers: [JokesController],
    providers: [JokesResolver, JokesService],
})
export class JokesModule {}
