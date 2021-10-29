import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('UserType')
export class UserType {
    @Field(() => String)
    email: string
}
