// import { Field, ID, ObjectType } from '@nestjs/graphql'
// import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
// import {UserEntity} from "../users/user.entity";
//
// const JOKES_TABLE_NAME = 'jokes'
//
// @Entity(JOKES_TABLE_NAME)
// @ObjectType({ description: 'joke' })
// export class JokeEntity {
//
//     @Field((type) => ID)
//     @PrimaryGeneratedColumn('uuid')
//     id: string
//
//     @Field()
//     @Column({type: String})
//     name: string
//
//     @Field()
//     @Column({type: String})
//     text: string
//
//     @Field()
//     @Column({type: Number})
//     rate: number
//
//     @Field()
//     @Column({type: Number})
//     like: number
//
//     @Field()
//     @Column({type: String})
//     view: string
//
//     @Field()
//     @Column({type: String})
//     public userId!: string
//
//     @Field(type => UserEntity)
//     @ManyToOne(() => UserEntity, user => user.jokes)
//     user: UserEntity;
// }