import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import {GraphQLModule} from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'

import { config } from './config/config'
import { typeOrmConfig } from './config/typeorm.config'
import { UsersModule } from './users/users.module'
import { StatusesModule } from './statuses/statuses.module'
import { JokesModule } from './jokes/jokes.module'
import {GroupsModule} from "./groups/groups.module";

@Module({
    imports: [
        ConfigModule.forRoot(config),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        GraphQLModule.forRoot({
            //            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
        UsersModule,
        StatusesModule,
        JokesModule,
        GroupsModule,
//        LevelsModule,

    ],
})
export class AppModule {}
