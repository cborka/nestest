import { ConfigModule, ConfigService } from '@nestjs/config'
import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm'

//import { User } from '../users/users.entity';

const DEFAULT_PSQL_HOST = 'localhost'
const DEFAULT_PSQL_PORT = 5432

export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: (configService: ConfigService): TypeOrmModuleOptions => {
        const database = configService.get<string>('PSQL_DATABASE')

        if (database === undefined) {
            throw new Error(
                "Environment variable 'PSQL_DATABASE' cannot be undefined",
            )
        }

        return {
            type: 'postgres',
//            entities: [User],
            entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
            database,
            host: configService.get('PSQL_HOST') || DEFAULT_PSQL_HOST,
            port: configService.get('PSQL_PORT') || DEFAULT_PSQL_PORT,
            username: configService.get('PSQL_USERNAME'),
            password: configService.get('PSQL_PASSWORD'),
            synchronize: false,

            // Может в .env лучше было использовать стандартные переменные окружения?
            // synchronize: configService.get('TYPEORM_SYNCHRONIZE'),
            // dropSchema:  configService.get('TYPEORM_DROP_SCHEMA'),

            // Когда приложение запускало миграции при старте
            // оно не могло найти файлы миграций без этогй строчки
            // ==> А не надо запускать миграции при старте приложения !!!
            //migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
            migrationsRun: false,
            dropSchema: false

            // Придумать способ, как отключать миграции. И дать возможность Typeorm самому синхронизировать энтити.
            // migrationsRun:
            //     configService.get('NODE_ENV') !== 'development-no-migration' &&
            //     configService.get('NODE_ENV') !== 'production',
            // synchronize:
            //     configService.get('NODE_ENV') === 'development-no-migration',
            //
            // // Также он бы хотел удалять базу перед запуском проекта и настраивать это через .env, по типу DROP_DATABASE=1.
            // // Но работать это должно только при разработке с синхронизацией
            // dropSchema:
            //     configService.get('DROP_DATABASE') === '1' &&
            //     configService.get('NODE_ENV') === 'development-no-migration',

        }
    },
    inject: [ConfigService],
}
