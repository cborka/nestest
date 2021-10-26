import { Field, Int, ID, ObjectType } from '@nestjs/graphql'

@ObjectType({ description: 'user' })
export class User {
    @Field((type) => ID)
    id: string

    @Field()
    name: string

    @Field()
    email: string

    @Field()
    password?: string

    @Field()
    createdAt: string

    @Field()
    deletedAt: string

    @Field({ nullable: true })
    isDeleted?: string
}

// @ObjectType({ description: 'recipe ' })
// export class User {
//     @Field(type => ID)
//     id: string;
//
//     @Field()
//     title: string;
//
//     @Field({ nullable: true })
//     description?: string;
//
//     @Field()
//     creationDate: Date;
//
//     @Field(type => [String])
//     ingredients: string[];
// }
