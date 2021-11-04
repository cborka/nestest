import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import {LevelEntity} from "./level.entity";
import {LevelDto} from "./level.dto";

@Injectable()
export class LevelsService {
    constructor(
        @InjectRepository(LevelEntity)
        private readonly levelsRepository: Repository<LevelEntity>,
    ) {}

    // Создание новой записи
    async create(levelDto: LevelDto): Promise<LevelEntity> {
        return await this.levelsRepository.save({
            name: levelDto.name,
        })
    }

    // Получить все записи
    findAll(): Promise<LevelEntity[]> {
        return this.levelsRepository.find()
    }

    // Получить одну запись по id
    findOneById(id: string): Promise<LevelEntity | undefined> {
        return this.levelsRepository.findOne(id)
    }


}