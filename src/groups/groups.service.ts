import { Injectable } from '@nestjs/common'
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

import {GroupInput} from "./group.input";
import { Group, GroupDocument } from './group.schema';


@Injectable()
export class GroupsService {
    constructor(
        @InjectModel(Group.name) private groupModel: Model<GroupDocument>
    ) {}

    async createGroup(groupInput: GroupInput): Promise<Group> {
        const createdGroup = new this.groupModel(groupInput);
        return createdGroup.save();
    }

    async findAll(): Promise<Group[]> {
        return this.groupModel.find().exec();
    }

    //Получить одну запись по id
    async findOneById(id: string | undefined): Promise<Group | null> {
        return await this.groupModel.findOne({_id: id}).exec()
    }


    async findGroupsByUserId(userId: string): Promise<Group[]> {
        return await this.groupModel.aggregate(
            [
                { "$addFields": { "gid": { "$toString": "$_id" }}},
                {
                    $lookup: {
                        from: "user_in_groups",
                        localField: "gid",
                        foreignField: "groupId",
                        as: "userInGroup"
                    }
                },
                { $unwind: { path: "$userInGroup", preserveNullAndEmptyArrays: true } },
                { $match : { "userInGroup.userId": await userId.toString() } },
            ]
        ).exec();
    }

    /**
     * Get record for the specified levelId
     *
     * @param levelId
     */
    async findOneByLevelId(levelId: string): Promise<Group | null> {
        return await this.groupModel.findOne({levelId: levelId}).exec()
    }

    // /**
    //  * Get records for the specified userId
    //  *
    //  * @param userId
    //  */
    // async findGroupsByUserId(userId: string): Promise<GroupEntity[]> {
    //     return await this.groupsRepository
    //         .createQueryBuilder('group')
    //         .where('group.id IN (SELECT "groupId" FROM user_in_group WHERE "userId" = :userId)',{ userId: userId })
    //         .withDeleted()
    //         .getMany()
    // }
    //
    // /**
    //  * Get records for the specified userInGroupId
    //  *
    //  * @param userInGroupId
    //  */
    // async findGroupByUserInGroupId(userInGroupId: string): Promise<GroupEntity> {
    //     return await this.groupsRepository
    //         .createQueryBuilder('group')
    //         .where(
    //             'group.id = (SELECT "groupId" FROM user_in_group WHERE id = :userInGroupId)',
    //             { userInGroupId: userInGroupId },
    //         )
    //         .withDeleted()
    //         .getOneOrFail()
    // }

}