import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { config } from './config/config'
import { typeOrmConfig } from './config/typeorm.config'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
//import { User } from './users/users.entity';

//import { GraphQLModule } from '@nestjs/graphql';

@Module({
    imports: [
        ConfigModule.forRoot(config),
        TypeOrmModule.forRootAsync(typeOrmConfig),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'),   // <-- path to the static files
        }),
        UsersModule,

//        GraphQLModule.forRoot({}),
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
