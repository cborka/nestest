import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class StatusInput {

    @Field()
    name!: string
}
