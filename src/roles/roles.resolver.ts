import {
    Parent,
//    Args,
//    Int,
//    Parent,
    Query,
    ResolveField,
//    Mutation,
//    ResolveField,
    Resolver,
} from '@nestjs/graphql'

//import { UserInput } from './user.input'
import { RoleEntity } from './role.entity'
import {RolesService } from './roles.service'
import {UserEntity} from "../users/user.entity";
import {UsersService} from "../users/users.service";

@Resolver(() =>RoleEntity)
export class RolesResolver {
    constructor(
        private rolesService: RolesService,
        private usersService: UsersService
    ) {}

    @Query((roles) => [RoleEntity])
    async roles(): Promise<RoleEntity[]> {
        return await this.rolesService.findAll()
    }

    @ResolveField()
    async users(@Parent() role: RoleEntity): Promise<UserEntity[]> {
        return this.usersService.findByRoleId(role.id);
    }
}
