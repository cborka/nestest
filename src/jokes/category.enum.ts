import { registerEnumType } from '@nestjs/graphql'

export enum JokeCategorys {
    Any = 'Any',
    Programming = 'Programming',
    Miscellaneous = 'Miscellaneous',
    Dark = "Dark",
    Pun = "Pun",
    Spooky = "Spooky",
    Christmas = "Christmas",
}

registerEnumType(JokeCategorys, {
    name: 'JokeCategorys',
})
