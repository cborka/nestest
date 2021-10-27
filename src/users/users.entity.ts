import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
} from 'typeorm'
import { Field, Int, ID, ObjectType } from '@nestjs/graphql'

//import {IsEmail} from "class-validator";

@Entity({ name: 'users' })
@ObjectType({ description: 'user' }) //
export class User {
    @Field((type) => ID) //
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column('varchar', { length: 80 })
    name: string

    @Field()
    @Column()
    //    @IsEmail()
    email: string

    @Field()
    @Column()
    password: string

    @Field()
    @CreateDateColumn()
    createdAt: string

    @Field()
    @DeleteDateColumn()
    deletedAt: string

    @Field()
    @Column({ default: true })
    isDeleted: boolean
}
