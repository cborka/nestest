import {Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./user.entity";
import {GroupEntity} from "../../groups/group.entity";

const USER_IN_GROUP_TABLE_NAME = 'user_in_group'

@Entity(USER_IN_GROUP_TABLE_NAME)
//@Entity({ name: 'users' })
export class UserInGroupEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({type: "timestamp"})
    createdAt: Date

    @DeleteDateColumn({type: "timestamp", nullable: true, default: undefined})
    deletedAt: Date

//    PostToCategory
    @Column()
    public userId!: string;

    @Column()
    public groupId!: string;

    @ManyToOne(() => UserEntity, user => user.userInGroup)
    public user!: UserEntity;

    @ManyToOne(() => GroupEntity, group => group.userInGroup)
    public group!: GroupEntity;


}
