import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserInGroupInput {
    // @Field()
    // id?: string

    @Field()
    userId: string

    @Field()
    groupId: string
}
