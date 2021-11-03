import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./user.entity";

const ROLE_TABLE_NAME = 'roles'

@Entity(ROLE_TABLE_NAME)
export class RoleEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: String})
    name: string

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity;
}