import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import { RoleEntity } from './role.entity'
import {RolesService } from './roles.service'
import {UserEntity} from "../users/user.entity";
import {UsersService} from "../users/users.service";
import {RoleInput} from "./role.input";

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

    @Mutation(() => RoleEntity)
    async createRole(
        @Args('input') input: RoleInput,
    ): Promise<RoleEntity | any> {
        return await this.rolesService.createRole(input)
    }
}
