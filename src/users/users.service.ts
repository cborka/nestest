import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UserEntity } from './user.entity'
import { UserInput } from './user.input'

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
    ) {}

    // Создание новой записи
    async createUser(userInput: UserInput): Promise<UserEntity> {
        return await this.usersRepository.save({
            name: userInput.name,
            surName: userInput.surName,
            login: userInput.login,
            password: userInput.password,
            statusId: userInput.statusId,
            roleId: userInput.roleId,
        })
    }

    // Получить все записи
    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find()
    }

    // Получить одну запись по id
    findOneById(id: string): Promise<UserEntity | undefined> {
        return this.usersRepository.findOne(id)
    }

    /**
     * Get records for the specified statusId
     *
     * @param statusId
     */
    async findByStatusId(statusId: string): Promise<UserEntity[]> {
        return await this.usersRepository
            .createQueryBuilder('user')
            .where('user.statusId = :statusId', { statusId: statusId })
            .withDeleted()
            .getMany()
    }

    /**
     * Get records for the specified roleId
     *
     * @param roleId
     */
    async findByRoleId(roleId: string): Promise<UserEntity[]> {
        return await this.usersRepository
            .createQueryBuilder('user')
            .where('user.roleId = :roleId', { roleId: roleId })
            .withDeleted()
            .getMany()
    }

    /**
     * Get records for the specified groupId
     *
     * @param groupId
     */
    async findUsersByGroupId(groupId: string): Promise<UserEntity[]> {
        return await this.usersRepository
            .createQueryBuilder('user')
            .where(
                'user.id IN (SELECT "userId" FROM user_in_group WHERE "groupId" = :groupId)',
                { groupId: groupId },
            )
            .withDeleted()
            .getMany()
    }

    /**
     * Get records for the specified userInGroupId
     *
     * @param userInGroupId
     */
    async findUserByUserInGroupId(userInGroupId: string): Promise<UserEntity> {
        return await this.usersRepository
            .createQueryBuilder('user')
            .where(
                'user.id = (SELECT "userId" FROM user_in_group WHERE id = :userInGroupId)',
                { userInGroupId: userInGroupId },
            )
            .withDeleted()
            .getOneOrFail()
    }
}
