import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class StatusInput {
    @Field()
    id: string

    @Field()
    name: string
}
