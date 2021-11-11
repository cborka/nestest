import { Injectable } from '@nestjs/common'
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

import {JokeInput} from "./joke.input";
import { Joke, JokeDocument } from './joke.schema';

@Injectable()
export class JokesService {
    constructor(
        @InjectModel(Joke.name) private jokeModel: Model<JokeDocument>
    ) {
    }


    async create(jokeInput: JokeInput): Promise<Joke> {
        const createdJoke = new this.jokeModel(jokeInput);
        return createdJoke.save();
    }

    async findAll(): Promise<Joke[]> {
        return this.jokeModel.find().exec();
    }


    /**
     * Get records for the specified userId
     *
     * @param userId
     */
    async findJokesByUserId(userId: string): Promise<Joke[]> {
        return await this.jokeModel.find({userId: userId}).exec()
    }





}
// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
//
// import { JokeEntity } from './joke.entity'
// import { JokeInput } from './joke.input'
//
// @Injectable()
// export class JokesService {
//     constructor(
//         @InjectRepository(JokeEntity)
//         private readonly jokesRepository: Repository<JokeEntity>,
//     ) {}
//
//     // Создание новой записи
//     async createJoke(jokeInput: JokeInput): Promise<JokeEntity> {
//         return await this.jokesRepository.save({
//             name: jokeInput.name,
//             text: jokeInput.text,
//             rate: jokeInput.rate,
//             like: jokeInput.like,
//             view: jokeInput.view,
//             userId: jokeInput.userId,
//         })
//     }
//
//     // Получить все записи
//     findAll(): Promise<JokeEntity[]> {
//         return this.jokesRepository.find()
//     }
//
//     /**
//      * Get records for the specified userId
//      *
//      * @param userId
//      */
//     async findJokesByUserId(userId: string): Promise<JokeEntity[]> {
//         return await this.jokesRepository
//             .createQueryBuilder('jokes')
//             .where('jokes.userId = :userId', { userId: userId })
//             .withDeleted()
//             .getMany()
//     }
// }
