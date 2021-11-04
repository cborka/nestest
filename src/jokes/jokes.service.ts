import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

// import { UserEntity } from './entities/user.entity'
// import { UserDto } from './dto/user.dto'
import {JokeEntity} from "./joke.entity";
import {JokeDto} from "./joke.dto";

@Injectable()
export class JokesService {
    constructor(
        @InjectRepository(JokeEntity)
        private readonly jokesRepository: Repository<JokeEntity>,
    ) {}

    // Создание новой записи
    async create(jokeDto: JokeDto): Promise<JokeEntity> {
        return await this.jokesRepository.save({
            name: jokeDto.name,
            text: jokeDto.text,
            rate: jokeDto.rate,
            like: jokeDto.like,
            view: jokeDto.view,
        })
    }

    // Получить все записи
    findAll(): Promise<JokeEntity[]> {
        return this.jokesRepository.find()
    }

}