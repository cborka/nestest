// import {Body, Controller, Delete, Get, Param, Post, Put, Redirect} from '@nestjs/common';
import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common'

import { JokesService } from './jokes.service'
// import { User } from './users.entity'
// import { UpdateUserDto } from './dto/update-user.dto'
// import { UpdateResult } from 'typeorm'

@Controller('jokes')
export class JokesController {
    constructor(private readonly jokesService: JokesService) {}

    // Запрос graphql
    @Get('/gql')
    gql(@Param('id') id: string): Promise<string> {
        return this.jokesService.gqlGetJoke()
    }
}
