import { Field, ID, ObjectType } from '@nestjs/graphql'
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {GroupEntity} from "../groups/group.entity";

const LEVEL_TABLE_NAME = 'levels'

@Entity(LEVEL_TABLE_NAME)
@ObjectType({ description: 'level' })
export class LevelEntity {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({type: String})
    name: string

    @Field(type => GroupEntity)
    group: GroupEntity;

}