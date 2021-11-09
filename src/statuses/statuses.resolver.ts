import {
    Args,
    Mutation,
    Query,
    Resolver,
} from '@nestjs/graphql'

import {StatusesService} from "./statuses.service";
import {StatusInput} from "./status.input";
import {Status} from "./status.schema";


@Resolver(() =>Status)
export class StatusesResolver {
    constructor(
        private statusesService: StatusesService,
        //        private groupsService: GroupsService,
    ) {}

    @Query((statuses) => [Status])
    async statuses(): Promise<Status[]> {
        return await this.statusesService.findAll()
    }

//     @ResolveField()
//     async users(@Parent() status: StatusEntity): Promise<UserEntity[]> {
//         return this.usersService.findByStatusId(status.id);
//     }

    @Mutation(() => Status)
    async createStatus(
        @Args('input') input: StatusInput,
    ): Promise<Status | any> {
        return await this.statusesService.create(input)
    }
}