import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

// import { UsersController } from './users.controller'
// import { UsersService } from './users.service'
import { UserEntity } from './user.entity'
// import { UsersResolver } from './users.resolver'
// import { AuthModule } from '../auth/auth.module'

@Module({
//    imports: [TypeOrmModule.forFeature([User]), forwardRef(() => AuthModule)],
    imports: [TypeOrmModule.forFeature([UserEntity])],
    // controllers: [UsersController],
    // providers: [UsersService, UsersResolver],
    // exports: [UsersService],
    controllers: [],
    providers: [],
    exports: [],
})
export class UsersModule {}