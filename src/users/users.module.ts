import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { UserEntity } from './entities/user.entity'
import { UsersResolver } from './users.resolver'
import {StatusesService} from "../statuses/statuses.service";
import {StatusEntity} from "../statuses/status.entity";
import {JokesService} from "../jokes/jokes.service";
import {JokeEntity} from "../jokes/joke.entity";
// import { AuthModule } from '../auth/auth.module'

@Module({
//    imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
    imports: [TypeOrmModule.forFeature([UserEntity, StatusEntity, JokeEntity])],
    // controllers: [UsersController],
    // providers: [UsersService, UsersResolver],
    // exports: [UsersService],
    controllers: [],
    providers: [UsersService, StatusesService, JokesService, UsersResolver],
    exports: [],
})
export class UsersModule {}