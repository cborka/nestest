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
import { StatusEntity } from './status.entity'
import {StatusesService } from './statuses.service'
import {UserEntity} from "../users/user.entity";
import {UsersService} from "../users/users.service";

@Resolver(() =>StatusEntity)
export class StatusesResolver {
    constructor(
        private statusesService: StatusesService,
        private usersService: UsersService
    ) {}

    @Query((statuses) => [StatusEntity])
    async statuses(): Promise<StatusEntity[]> {
        return await this.statusesService.findAll()
    }

    @ResolveField()
    async users(@Parent() status: StatusEntity): Promise<UserEntity[]> {
//        return this.usersService.findAll();
        return this.usersService.findByStatusId(status.id);
    }
}
