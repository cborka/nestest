// import { Field, ID, ObjectType } from '@nestjs/graphql'
// import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
// import {LevelEntity} from "../levels/level.entity";
// import {UserInGroupEntity} from "../userInGroup/userInGroup.entity";
// import {UserEntity} from "../users/user.entity";
//
// const GROUPS_TABLE_NAME = 'groups'
//
// @Entity(GROUPS_TABLE_NAME)
// @ObjectType({ description: 'group' })
// export class GroupEntity {
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
//     shortName: string
//
//     @Field()
//     @Column({type: String})
//     public levelId!: string
//
//     @Field(type => LevelEntity)
//     @OneToOne(() => LevelEntity)
//     @JoinColumn()
//     level: LevelEntity;
//
//     @Field(type => [UserEntity])
//     users: UserEntity[];
//
//     @OneToMany(() => UserInGroupEntity, userInGroup => userInGroup.group)
//     public userInGroup!: UserInGroupEntity[];
// }