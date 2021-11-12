import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserInGroupInput {

    @Field()
    userId: string

    @Field()
    groupId: string
}
