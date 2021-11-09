import { Injectable } from '@nestjs/common'
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

import {LevelInput} from "./level.input";
import { Level, LevelDocument } from './level.schema';


@Injectable()
export class LevelsService {
    constructor(
        @InjectModel(Level.name) private levelModel: Model<LevelDocument>
    ) {}


    async create(levelInput: LevelInput): Promise<Level> {
        const createdLevel = new this.levelModel(levelInput);
        return createdLevel.save();
    }

    async findAll(): Promise<Level[]> {
        return this.levelModel.find().exec();
    }
    // // Создание новой записи
    // async createLevel(levelInput: LevelInput): Promise<LevelEntity> {
    //     return await this.levelsRepository.save({
    //         name: levelInput.name
    //     })
    // }
    //
    // // Получить все записи
    // findAll(): Promise<LevelEntity[]> {
    //     return this.levelsRepository.find()
    // }
    //
    // // Получить одну запись по id
    // findOneById(id: string): Promise<LevelEntity | undefined> {
    //     return this.levelsRepository.findOne(id)
    // }
    //

}