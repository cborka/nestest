import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import {GroupEntity} from "./group.entity";
import {GroupInput} from "./group.input";

@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(GroupEntity)
        private readonly groupsRepository: Repository<GroupEntity>,
    ) {}

    // Создание новой записи
    async createGroup(groupInput: GroupInput): Promise<GroupEntity> {
        return await this.groupsRepository.save({
            name: groupInput.name,
            shortName: groupInput.shortName,
            levelId: groupInput.levelId,
        })
    }

    // Получить все записи
    findAll(): Promise<GroupEntity[]> {
        return this.groupsRepository.find()
    }

    /**
     * Get record for the specified levelId
     *
     * @param levelId
     */
    async findOneByLevelId(levelId: string): Promise<GroupEntity | undefined> {
        return await this.groupsRepository
            .createQueryBuilder('group')
            .where('group.levelId = :levelId', { levelId: levelId })
            .withDeleted()
            .getOneOrFail()
    }

    /**
     * Get records for the specified userId
     *
     * @param userId
     */
    async findGroupsByUserId(userId: string): Promise<GroupEntity[]> {
        return await this.groupsRepository
            .createQueryBuilder('group')
            .where('group.id IN (SELECT "groupId" FROM user_in_group WHERE "userId" = :userId)',{ userId: userId })
            .withDeleted()
            .getMany()
    }

    /**
     * Get records for the specified userInGroupId
     *
     * @param userInGroupId
     */
    async findGroupByUserInGroupId(userInGroupId: string): Promise<GroupEntity> {
        return await this.groupsRepository
            .createQueryBuilder('group')
            .where(
                'group.id = (SELECT "groupId" FROM user_in_group WHERE id = :userInGroupId)',
                { userInGroupId: userInGroupId },
            )
            .withDeleted()
            .getOneOrFail()
    }

}