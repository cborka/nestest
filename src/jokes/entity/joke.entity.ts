import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";

const JOKES_TABLE_NAME = 'jokes'

@Entity(JOKES_TABLE_NAME)
export class JokeEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: String})
    name: string

    @Column({type: String})
    text: string

    @Column({type: Number})
    rate: number

    @Column({type: Number})
    like: number

    @Column({type: String})
    view: string

    @ManyToOne(() => UserEntity, user => user.jokes)
    user: UserEntity;
}