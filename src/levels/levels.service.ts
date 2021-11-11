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


    async createLevel(levelInput: LevelInput): Promise<Level> {
        const createdLevel = new this.levelModel(levelInput);
        return createdLevel.save();
    }

    async findAll(): Promise<Level[]> {
        return this.levelModel.find().exec();
    }

    // Получить одну запись по id
    async findOneById(id: string | undefined): Promise<Level | undefined | null> {
        return await this.levelModel.findOne({_id: id}).exec()
    }

}