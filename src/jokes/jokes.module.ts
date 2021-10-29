import { Module } from '@nestjs/common'

import { JokesController } from './jokes.controller'
import { JokesResolver } from './jokes.resolver'
import { JokesService } from './jokes.service'

@Module({
    controllers: [JokesController],
    providers: [JokesResolver, JokesService],
})
export class JokesModule {}
