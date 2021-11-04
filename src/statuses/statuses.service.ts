import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { StatusEntity } from './status.entity'
import { StatusDto } from './status.dto'
//import { AuthService } from '../auth/auth.service'

@Injectable()
export class StatusesService {
    constructor(
        @InjectRepository(StatusEntity)
        private readonly statusesRepository: Repository<StatusEntity>,
    ) {}

    // Создание новой записи
    async create(statusrDto: StatusDto): Promise<StatusEntity> {
        return await this.statusesRepository.save({
            name: statusrDto.name,
        })
    }

    // Получить все записи
    findAll(): Promise<StatusEntity[]> {
        return this.statusesRepository.find()
    }

    // Получить одну запись по id
    findOneById(id: string): Promise<StatusEntity | undefined> {
        return this.statusesRepository.findOne(id)
    }

}