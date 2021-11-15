import { Injectable } from '@nestjs/common'
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

import {UserInGroupInput} from "./userInGroup.input";
import {UserInGroup, UserInGroupDocument} from "./userInGroup.schema";
import {Group} from "../groups/group.schema";
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

    //
//    async findGroupsByUserId(userId: string): Promise<UserInGroup[]> {
    async findGroupsByUserId(userId: string): Promise<Group[]> {
//        let rec = await this.userInGroupModel.find({userId: userId}).exec();
//        console.log("1: "+ userId)
//        console.log(rec)
         let rec2 = await this.userInGroupModel.aggregate(
              [
                  {
                      $lookup: {
                          from: "groups", // collection to join
                          localField: "groupId",//field from the input documents
                          foreignField: "_id",//field from the documents of the "from" collection
                          as: "groups"// output array field
                      }
                  },
//                  { $unwind: { path: "$groups", preserveNullAndEmptyArrays: true } },
                  {
                      $project: {
                          "groups": "$groups",
                          "name": "groups.name",
                          "shortName": "$groups.shortName",
                          "group_id": "$groups._id",
                          "group_zzz": "$groups.zzz",

                          //userInGroupModel
                         "_id": "$_id",
                         "userId": "userId",
                         "groupId": "$groupId",
                         "createdAt": "$createdAt",

                      }
                  }


                  //     {
             //         $lookup: {
             //             from: "groups",
             //             localField: "groupId",
             //             foreignField: "id",
             //             as: "fromGroups"
             //         }
             //     },
             //     // {
             //     //     $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$fromItems", 0 ] }, "$$ROOT" ] } }
             //     // },
             //     // { $project: { fromItems: 0 } }
              ]
         ).exec();
        // db.jokes.aggregate([{$lookup: {from: "users", localField: "userId", foreignField: "_id", as: "login password" }}])
//         let rec2 = await this.userInGroupModel.find({userId: userId}).populate(
//              {
//                  path: 'groups',
//
// //                match: { name: new RegExp('.*h.*', 'i') },
// //                sort: { name: -1 }
//             }
//
//         ).exec();
        console.log("2: ")
        console.log(rec2)
        return rec2


      //  return await this.groupModel.find({userId: userId}).exec();
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
