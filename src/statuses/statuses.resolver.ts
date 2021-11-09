// import {
//     Args,
//     Mutation,
//     Parent,
//     Query,
//     ResolveField,
//     Resolver,
// } from '@nestjs/graphql'
//
// import { StatusEntity } from './status.entity'
// import { StatusesService } from './statuses.service'
// import { UserEntity } from '../users/user.entity'
// import { UsersService } from '../users/users.service'
// import { StatusInput } from './status.input'
//
// @Resolver(() => StatusEntity)
// export class StatusesResolver {
//     constructor(
//         private statusesService: StatusesService,
//         private usersService: UsersService,
//     ) {}
//
//     @Query((statuses) => [StatusEntity])
//     async statuses(): Promise<StatusEntity[]> {
//         return await this.statusesService.findAll()
//     }
//
//     @ResolveField()
//     async users(@Parent() status: StatusEntity): Promise<UserEntity[]> {
//         return this.usersService.findByStatusId(status.id)
//     }
//
//     @Mutation(() => StatusEntity)
//     async createStatus(
//         @Args('input') input: StatusInput,
//     ): Promise<StatusEntity> {
//         return await this.statusesService.createStatus(input)
//     }
// }
