import { registerEnumType, Field, ID, ObjectType } from '@nestjs/graphql'

export enum JokeCategorys {
    Any,
    Programming,
    Miscellaneous,
    Dark,
    Pun,
    Spooky,
    Christmas,
}

registerEnumType(JokeCategorys, {
    name: 'JokeCategorys',
})

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

// "error": false,
//     "category": "Pun",
//     "type": "twopart",
//     "setup": "What do you call a witch at the beach?",
//     "delivery": "A Sandwich.",
//     "flags": {
//     "nsfw": false,
//         "religious": false,
//         "political": false,
//         "racist": false,
//         "sexist": false,
//         "explicit": false
// },
// "id": 176,
//     "safe": true,
//     "lang": "en"
