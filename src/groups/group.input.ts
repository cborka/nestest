import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class GroupInput {

    @Field()
    name: string

    @Field()
    shortName: string

    @Field()
    levelId: string
}
