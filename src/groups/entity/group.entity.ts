import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {LevelEntity} from "./level.entity";
import {UserInGroupEntity} from "../../users/entities/userInGroup.entity";

const GROUPS_TABLE_NAME = 'groups'

@Entity(GROUPS_TABLE_NAME)
export class GroupEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: String})
    name: string

    @Column({type: String})
    shortName: string

    @OneToOne(() => LevelEntity)
    @JoinColumn()
    level: LevelEntity;

    @OneToMany(() => UserInGroupEntity, userInGroup => userInGroup.group)
    public userInGroup!: UserInGroupEntity[];

}