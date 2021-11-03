import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

const STATUS_TABLE_NAME = 'statuses'

@Entity(STATUS_TABLE_NAME)
export class StatusEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: String})
    name: string
}