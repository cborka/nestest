import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {Status, StatusSchema} from "./status.schema"
import {StatusesService} from "./statuses.service";
import {StatusesResolver} from "./statuses.resolver";
import {User, UserSchema} from "../users/user.schema";
import {UsersService} from "../users/users.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Status.name, schema: StatusSchema },
            { name: User.name, schema: UserSchema },
        ])
    ],
    providers: [StatusesService, StatusesResolver, UsersService],
    // exports: [],
})
export class StatusesModule {}