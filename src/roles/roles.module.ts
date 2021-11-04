import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import {StatusesService } from './statuses.service'
// import { StatusEntity } from './status.entity'
// import { StatusesResolver } from './statuses.resolver'
import {UserEntity} from "../users/user.entity";
import {UsersService} from "../users/users.service";
import {RoleEntity} from './role.entity';
import {RolesService} from "./roles.service";
import {RolesResolver} from "./roles.resolver";

// import { AuthModule } from '../auth/auth.module'

@Module({
    imports: [TypeOrmModule.forFeature([RoleEntity, UserEntity])],
    controllers: [],
    providers: [RolesService, UsersService, RolesResolver],
    exports: [],
})
export class StatusesModule {}