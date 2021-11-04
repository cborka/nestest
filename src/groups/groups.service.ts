import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import {GroupEntity} from "./group.entity";
import {GroupDto} from "./group.dto";

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(GroupEntity)
        private readonly groupsRepository: Repository<GroupEntity>,
    ) {}

    // Создание новой записи
    async create(groupDto: GroupDto): Promise<GroupEntity> {
        return await this.groupsRepository.save({
            name: groupDto.name,
            shortName: groupDto.shortName,
        })
    }

    // Получить все записи
    findAll(): Promise<GroupEntity[]> {
        return this.groupsRepository.find()
    }

}