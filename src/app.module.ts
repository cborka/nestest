import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from './config/config'
import { typeOrmConfig } from './config/typeorm.config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { JokesModule } from './jokes/jokes.module'
import { UsersModule } from './users/users.module'
import { RecipesModule } from './recipes/recipes.module'

@Module({
    imports: [
        ConfigModule.forRoot(config),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'), // <-- path to the static files
        }),
        JokesModule,
        UsersModule,
        RecipesModule,

        GraphQLModule.forRoot({
            //            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
        }),
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
