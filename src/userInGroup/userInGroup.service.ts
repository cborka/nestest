import { Injectable } from '@nestjs/common'
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

import {UserInGroupInput} from "./userInGroup.input";
import {UserInGroup, UserInGroupDocument} from "./userInGroup.schema";
//import {Group} from "../groups/group.schema";
//import {Group, GroupDocument} from "../groups/group.schema";

@Injectable()
export class UserInGroupService {
    constructor(
        @InjectModel(UserInGroup.name) private userInGroupModel: Model<UserInGroupDocument>,
//        @InjectModel(Group.name) private groupModel: Model<GroupDocument>,

    ) {}

    // Создание новой записи
    async createUserInGroup(userInGroupInput: UserInGroupInput): Promise<UserInGroup> {
        const createdUserInGroup =  new this.userInGroupModel(userInGroupInput);
        return await createdUserInGroup.save();
    }

    // Получить все записи
    findAll(): Promise<UserInGroup[]> {
        return this.userInGroupModel.find().exec();
    }

     /**
     * Get records for the specified groupId
     *
     * @param groupId
     */
    // async findUsersByGroupId(groupId: string): Promise<User[] | null> {
    //     return await this.userInGroupModel.find({groupId: groupId}).select('user').exec()
    // }
            // .createQueryBuilder('user')
            // .where(
            //     'user.id IN (SELECT "userId" FROM user_in_group WHERE "groupId" = :groupId)',
            //     { groupId: groupId },
            // )
            // .withDeleted()
            // .getMany()




}
