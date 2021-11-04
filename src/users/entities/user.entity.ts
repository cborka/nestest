import { Field, ID, ObjectType } from '@nestjs/graphql'
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity, ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import {StatusEntity} from "../../statuses/status.entity";
import {JokeEntity} from "../../jokes/joke.entity";
import {UserInGroupEntity} from "./userInGroup.entity";
import {RoleEntity} from "../../roles/role.entity";

const USER_TABLE_NAME = 'users'

@Entity(USER_TABLE_NAME)
@ObjectType({ description: 'user' }) //
export class UserEntity {

    @Field((type) => ID)
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Field()
    @Column({type: String})
    name: string

    @Field()
    @Column({type: String})
    surname: string

    @Field()
    @Column({type: String})
    login: string

    @Field()
    @Column({type: String})
    password: string

    @Field()
    @CreateDateColumn({type: "timestamp"})
    createdAt: string

    @Field({ nullable: true })
    @DeleteDateColumn({type: "timestamp", nullable: true, default: undefined})
    deletedAt?: string

    @Field()
    @Column({type: String})
    public statusId!: string

    @Field(type => StatusEntity)
    @ManyToOne(() => StatusEntity, status => status.users)
    status: StatusEntity;

    @Field( { nullable: true })
    @Column({type: String, nullable: true })
    public roleId: string

    @Field(type => RoleEntity, { nullable: true })
    @ManyToOne(() => RoleEntity, role => role.users)
    role?: RoleEntity;

    @OneToMany(() => JokeEntity, joke => joke.user)
    jokes: JokeEntity[];

    @OneToMany(() => UserInGroupEntity, userInGroup => userInGroup.user)
    public userInGroup!: UserInGroupEntity[];

}
