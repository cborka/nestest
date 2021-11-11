import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {User, UserSchema} from "./user.schema"

import {UsersService} from "./users.service";
import {UsersResolver} from "./users.resolver";
import {Role, RoleSchema} from '../roles/role.schema';
import {RolesService} from "../roles/roles.service";
import {Status, StatusSchema} from "../statuses/status.schema";
import {StatusesService} from "../statuses/statuses.service";
import {Joke, JokeSchema} from "../jokes/joke.schema";
import {JokesService} from "../jokes/jokes.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: Role.name, schema: RoleSchema },
            { name: Status.name, schema: StatusSchema },
            { name: Joke.name, schema: JokeSchema },
        ])
    ],
    providers: [UsersService, UsersResolver, RolesService, StatusesService, JokesService]
    // controllers: [],
    // exports: [],
})
export class UsersModule {}