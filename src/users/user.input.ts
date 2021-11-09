import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UserInput {

    @Field()
    name: string

    @Field()
    surName: string

    @Field()
    login: string

    @Field()
    password: string

    @Field()
    statusId: string

    @Field({ nullable: true })
    roleId: string
}
