import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class JokeInput {
    @Field()
    id: string

    @Field()
    name: string

    @Field()
    text: string

    @Field()
    rate: number

    @Field()
    like: number

    @Field()
    view: string

    @Field()
    userId: string

}
