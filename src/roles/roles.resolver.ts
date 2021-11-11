import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import {RolesService} from "./roles.service";
import {RoleInput} from "./role.input";
import {Role} from "./role.schema";
import {User} from "../users/user.schema";
import {UsersService} from "../users/users.service";


@Resolver(() =>Role)
export class RolesResolver {
    constructor(
        private rolesService: RolesService,
        private usersService: UsersService,
    ) {}

    @Query((roles) => [Role])
    async roles(): Promise<Role[]> {
        return await this.rolesService.findAll()
    }

    @ResolveField()
    async users(@Parent() role: Role): Promise<User[]> {
        return this.usersService.findByRoleId(role._id);
    }

    @Mutation(() => Role)
    async createRole(
        @Args('input') input: RoleInput,
    ): Promise<Role | any> {
        return await this.rolesService.create(input)
    }
}