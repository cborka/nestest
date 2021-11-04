import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { RoleEntity } from './role.entity'
import { RoleDto } from './role.dto'
//import { AuthService } from '../auth/auth.service'

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly rolesRepository: Repository<RoleEntity>,
    ) {}

    // Создание новой записи
    async create(statusrDto: RoleDto): Promise<RoleEntity> {
        return await this.rolesRepository.save({
            name: statusrDto.name,
        })
    }

    // Получить все записи
    findAll(): Promise<RoleEntity[]> {
        return this.rolesRepository.find()
    }

    // Получить одну запись по id
    findOneById(id: string): Promise<RoleEntity | undefined> {
        return this.rolesRepository.findOne(id)
    }

}