// import { Field, ID, ObjectType } from '@nestjs/graphql'
// import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
// import {UserEntity} from "../users/user.entity";
//
// const STATUS_TABLE_NAME = 'statuses'
//
// @Entity(STATUS_TABLE_NAME)
// @ObjectType({ description: 'status' }) //
// export class StatusEntity {
//
//     @Field((type) => ID)
//     @PrimaryGeneratedColumn('uuid')
//     id: string
//
//     @Field()
//     @Column({type: String})
//     name: string
//
//     @Field(type => [UserEntity])
//     @OneToMany(() => UserEntity, user => user.status)
//     users: UserEntity[];
// }