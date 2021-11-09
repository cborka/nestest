import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose';

import {Status, StatusSchema} from "./status.schema"
import {StatusesService} from "./statuses.service";
import {StatusesResolver} from "./statuses.resolver";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Status.name, schema: StatusSchema }])
    ],
    providers: [StatusesService, StatusesResolver],
    // exports: [],
})
export class StatusesModule {}