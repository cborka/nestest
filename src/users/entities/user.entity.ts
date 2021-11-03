import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    JoinColumn, OneToMany,
    OneToOne,
    PrimaryGeneratedColumn
} from "typeorm";
import {StatusEntity} from "./status.entity";
import {JokeEntity} from "../../jokes/entity/joke.entity";
import {UserInGroupEntity} from "./userInGroup.entity";

const USER_TABLE_NAME = 'users'

@Entity(USER_TABLE_NAME)
//@Entity({ name: 'users' })
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

    @CreateDateColumn({type: "timestamp"})
    createdAt: string

    @DeleteDateColumn({type: "timestamp", nullable: true, default: undefined})
    deletedAt: string

    @OneToOne(() => StatusEntity)
    @JoinColumn()
    status: StatusEntity;

    @OneToMany(() => JokeEntity, joke => joke.user)
    jokes: JokeEntity[];

    @OneToMany(() => UserInGroupEntity, userInGroup => userInGroup.user)
    public userInGroup!: UserInGroupEntity[];

}
