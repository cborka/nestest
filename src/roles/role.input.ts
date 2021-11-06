import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class RoleInput {
    @Field()
    id: string

    @Field()
    name: string
}
