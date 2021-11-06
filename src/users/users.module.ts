import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { UserEntity } from './user.entity'
import { UsersResolver } from './users.resolver'
import {StatusesService} from "../statuses/statuses.service";
import {StatusEntity} from "../statuses/status.entity";
import {JokesService} from "../jokes/jokes.service";
import {JokeEntity} from "../jokes/joke.entity";
import {GroupsService} from "../groups/groups.service";
import {GroupEntity} from "../groups/group.entity";
import {RolesService} from "../roles/roles.service";
import {RoleEntity} from "../roles/role.entity";
import {UserInGroupService} from "../userInGroup/userInGroup.service";
import {UserInGroupEntity} from "../userInGroup/userInGroup.entity";
// import { AuthModule } from '../auth/auth.module'

@Module({
//    imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
    imports: [TypeOrmModule.forFeature([UserEntity, StatusEntity, RoleEntity, JokeEntity, GroupEntity, UserInGroupEntity])],
    // controllers: [UsersController],
    // providers: [UsersService, UsersResolver],
    // exports: [UsersService],
    controllers: [],
    providers: [UsersService, StatusesService, RolesService, JokesService, GroupsService, UserInGroupService, UsersResolver],
    exports: [],
})
export class UsersModule {}