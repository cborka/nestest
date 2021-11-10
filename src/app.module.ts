import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'

import { config } from './config/config'
import { mongooseConfig } from './config/mongoose.config'

import { UsersModule } from './users/users.module'
import { StatusesModule } from './statuses/statuses.module'
import { JokesModule } from './jokes/jokes.module'
import {GroupsModule} from "./groups/groups.module";
import {LevelsModule} from "./levels/levels.module";
import {RolesModule} from "./roles/roles.module";
// import {UserInGroupModule} from "./userInGroup/userInGroup.module";

@Module({
    imports: [
        ConfigModule.forRoot(config),
        MongooseModule.forRootAsync(mongooseConfig),
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
        UsersModule,
        StatusesModule,
        JokesModule,
        GroupsModule,
        LevelsModule,
        RolesModule,
        // UserInGroupModule,

    ],
})
export class AppModule {}
