import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import {StatusesService } from './statuses.service'
import { StatusEntity } from './status.entity'
import { StatusesResolver } from './statuses.resolver'
import {UserEntity} from "../users/user.entity";
import {UsersService} from "../users/users.service";
// import { AuthModule } from '../auth/auth.module'

@Module({
    imports: [TypeOrmModule.forFeature([StatusEntity, UserEntity])],
    controllers: [],
    providers: [StatusesService, UsersService, StatusesResolver],
    exports: [],
})
export class StatusesModule {}