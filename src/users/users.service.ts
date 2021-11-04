import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
//import { compare, genSalt, hash } from 'bcryptjs'
//import { Md5 } from 'ts-md5/dist/md5'

import { UserEntity } from './user.entity'
import { UserDto } from './user.dto'

@Injectable()
export class UsersService {
    //    private _circularDependencyService: AuthService

    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
    ) {}

    // Создание новой записи
    async create(userDto: UserDto): Promise<UserEntity> {
        return await this.usersRepository.save({
            name: userDto.name,
            surName: userDto.surName,
            login: userDto.login,
            password: userDto.password
//            password: Md5.hashStr(userDto.password),
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
    async findGroupsById(groupId: string): Promise<UserEntity[]> {
        return await this.usersRepository
            .createQueryBuilder('user')
            .where('user.id IN (SELECT "userId" FROM user_in_group WHERE "groupId" = :groupId)',{ groupId: groupId })
            .withDeleted()
            .getMany()
    }



    privet(): string {
        return 'Привет, командир!'
    }
}