import { Field, ID, ObjectType } from '@nestjs/graphql'
import { JokeCategorys } from './category.enum'

@ObjectType({ description: 'joke' })
export class Joke {
    @Field((type) => ID)
    id: string

    @Field((type) => JokeCategorys)
    cat: string

    @Field()
    category: string

    @Field()
    text: string

    @Field((type) => [String])
    flags: string[]
}
