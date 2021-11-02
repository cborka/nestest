import { Controller, Get, Param } from '@nestjs/common'

import { JokesService } from './jokes.service'

@Controller('jokes')
export class JokesController {
    constructor(private readonly jokesService: JokesService) {}

    // Запрос graphql
    @Get('/gql')
    gql(@Param('id') id: string): Promise<string> {
        return this.jokesService.gqlGetJoke2()
    }
}
