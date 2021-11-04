import { Field, ID, ObjectType } from '@nestjs/graphql'
import {Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../users/user.entity";
import {GroupEntity} from "../groups/group.entity";

const USER_IN_GROUP_TABLE_NAME = 'user_in_group'

@Entity(USER_IN_GROUP_TABLE_NAME)
@ObjectType({ description: 'userInGroup' })
export class UserInGroupEntity {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @CreateDateColumn({type: "timestamp"})
    createdAt: Date

    @Field({nullable: true})
    @DeleteDateColumn({type: "timestamp", nullable: true, default: undefined})
    deletedAt: Date

    @Field()
    @Column()
    public userId!: string;

    @Field()
    @Column()
    public groupId!: string;

    @Field((type) => UserEntity)
    @ManyToOne(() => UserEntity, user => user.userInGroup)
    public user!: UserEntity;

    @Field((type) => GroupEntity)
    @ManyToOne(() => GroupEntity, group => group.userInGroup)
    public group!: GroupEntity;


}
