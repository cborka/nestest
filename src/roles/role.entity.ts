import { Field, ID, ObjectType } from '@nestjs/graphql'
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../users/user.entity";

const ROLE_TABLE_NAME = 'roles'

@Entity(ROLE_TABLE_NAME)
@ObjectType({ description: 'role' })
export class RoleEntity {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({type: String})
    name: string

    @Field(type => [UserEntity])
    @OneToMany(() => UserEntity, user => user.role)
    users: UserEntity[];
}

