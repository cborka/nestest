import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class LevelInput {
    @Field()
    id: string

    @Field()
    name: string
}