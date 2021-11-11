import {
    Args,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql'

import {StatusesService} from "./statuses.service";
import {StatusInput} from "./status.input";
import {Status} from "./status.schema";
import {User} from "../users/user.schema";
import {UsersService} from "../users/users.service";


@Resolver(() =>Status)
export class StatusesResolver {
    constructor(
        private statusesService: StatusesService,
        private usersService: UsersService,
    ) {}

    @Query((statuses) => [Status])
    async statuses(): Promise<Status[]> {
        return await this.statusesService.findAll()
    }

    @ResolveField()
    async users(@Parent() status: Status): Promise<User[]> {
        return this.usersService.findByStatusId(status._id);
    }

    @Mutation(() => Status)
    async createStatus(
        @Args('input') input: StatusInput,
    ): Promise<Status | any> {
        return await this.statusesService.create(input)
    }
}