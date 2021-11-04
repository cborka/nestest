import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import {JokeEntity} from "./joke.entity";
import {UserEntity} from '../users/entities/user.entity';
import {UsersService} from '../users/users.service';
import {JokesService} from './jokes.service';
import {JokesResolver} from "./jokes.resolver";

@Module({
    imports: [TypeOrmModule.forFeature([JokeEntity, UserEntity])],
    // controllers: [UsersController],
    // providers: [UsersService, UsersResolver],
    // exports: [UsersService],
    controllers: [],
    providers: [JokesService, UsersService, JokesResolver],
    exports: [],
})
export class JokesModule {}