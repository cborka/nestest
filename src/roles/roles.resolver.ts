import {
    Args,
    Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql'

import {RolesService} from "./roles.service";
import {RoleInput} from "./role.input";
import {Role} from "./role.schema";


@Resolver(() =>Role)
export class RolesResolver {
    constructor(
        private rolesService: RolesService,
        //        private groupsService: GroupsService,
    ) {}

    @Query((roles) => [Role])
    async roles(): Promise<Role[]> {
        return await this.rolesService.findAll()
    }

//     @ResolveField()
//     async users(@Parent() role: RoleEntity): Promise<UserEntity[]> {
//         return this.usersService.findByRoleId(role.id);
//     }

    @Mutation(() => Role)
    async createRole(
        @Args('input') input: RoleInput,
    ): Promise<Role | any> {
        return await this.rolesService.create(input)
    }
}