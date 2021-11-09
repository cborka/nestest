// import { Field, ID, ObjectType } from '@nestjs/graphql'
// import {
//     Column,
//     CreateDateColumn,
//     DeleteDateColumn,
//     Entity,
//     ManyToOne,
//     OneToMany,
//     PrimaryGeneratedColumn,
// } from 'typeorm'
// import { StatusEntity } from '../statuses/status.entity'
// import { JokeEntity } from '../jokes/joke.entity'
// import { UserInGroupEntity } from '../userInGroup/userInGroup.entity'
// import { RoleEntity } from '../roles/role.entity'
// import { GroupEntity } from '../groups/group.entity'
//
// const USER_TABLE_NAME = 'users'
//
// @Entity(USER_TABLE_NAME)
// @ObjectType({ description: 'user' }) //
// export class UserEntity {
//     @Field((type) => ID)
//     @PrimaryGeneratedColumn('uuid')
//     id: string
//
//     @Field()
//     @Column({ type: String })
//     name: string
//
//     @Field()
//     @Column({ type: String })
//     surName: string
//
//     @Field()
//     @Column({ type: String })
//     login: string
//
//     @Field()
//     @Column({ type: String })
//     password: string
//
//     @Field()
//     @CreateDateColumn({ type: 'timestamp' })
//     createdAt: string
//
//     @Field({ nullable: true })
//     @DeleteDateColumn({ type: 'timestamp', nullable: true, default: undefined })
//     deletedAt?: string
//
//     @Field()
//     @Column({ type: String })
//     statusId!: string
//
//     @Field((type) => StatusEntity)
//     @ManyToOne(() => StatusEntity, (status) => status.users)
//     status: StatusEntity
//
//     @Field({ nullable: true })
//     @Column({ type: String, nullable: true })
//     roleId: string
//
//     @Field((type) => RoleEntity, { nullable: true })
//     @ManyToOne(() => RoleEntity, (role) => role.users)
//     role: RoleEntity
//
//     @Field((type) => [JokeEntity])
//     @OneToMany(() => JokeEntity, (joke) => joke.user)
//     jokes: JokeEntity[]
//
//     @Field((type) => [GroupEntity])
//     groups: GroupEntity[]
//
//     @OneToMany(() => UserInGroupEntity, (userInGroup) => userInGroup.user)
//     public userInGroup!: UserInGroupEntity[]
// }
