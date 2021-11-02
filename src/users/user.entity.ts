import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

//const USER_TABLE_NAME = 'users'

//@Entity(USER_TABLE_NAME)
@Entity({ name: 'users' })
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: String})
    name: string

    @Column({type: String})
    surname: string

    @Column({type: String})
    login: string

    @Column({type: String})
    password: string

    @Column({type: "timestamp", default: () => Date.now()})
    createdAt: string

    @Column({type: "timestamp", nullable: true, default: undefined})
    deletedAt: string
}



