import { Injectable } from '@nestjs/common'
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

import {UserInput} from "./user.input";
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async create(userInput: UserInput): Promise<User> {
        const createdUser = new this.userModel(userInput);
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    //Получить одну запись по id
    async findOneById(id: string | undefined): Promise<User | null> {
        return await this.userModel.findOne({_id: id}).exec()
    }


    /**
     * Get records for the specified roleId
     *
     * @param roleId
     */
    async findByRoleId(roleId: string): Promise<User[]> {
        return await this.userModel.find({roleId: roleId}).exec()
    }

    /**
     * Get records for the specified statusId
     *
     * @param statusId
     */
    async findByStatusId(statusId: string): Promise<User[]> {
        return await this.userModel.find({statusId: statusId}).exec()
    }


}
// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
//
// import { UserEntity } from './user.entity'
// import { UserInput } from './user.input'
//
// @Injectable()
// export class UsersService {
//     constructor(
//         @InjectRepository(UserEntity)
//         private readonly usersRepository: Repository<UserEntity>,
//     ) {}
//
//
//     // Получить одну запись по id
//     findOneById(id: string): Promise<UserEntity | undefined> {
//         return this.usersRepository.findOne(id)
//     }
//
//     /**
//      * Get records for the specified groupId
//      *
//      * @param groupId
//      */
//     async findUsersByGroupId(groupId: string): Promise<UserEntity[]> {
//         return await this.usersRepository
//             .createQueryBuilder('user')
//             .where(
//                 'user.id IN (SELECT "userId" FROM user_in_group WHERE "groupId" = :groupId)',
//                 { groupId: groupId },
//             )
//             .withDeleted()
//             .getMany()
//     }
//
//     /**
//      * Get records for the specified userInGroupId
//      *
//      * @param userInGroupId
//      */
//     async findUserByUserInGroupId(userInGroupId: string): Promise<UserEntity> {
//         return await this.usersRepository
//             .createQueryBuilder('user')
//             .where(
//                 'user.id = (SELECT "userId" FROM user_in_group WHERE id = :userInGroupId)',
//                 { userInGroupId: userInGroupId },
//             )
//             .withDeleted()
//             .getOneOrFail()
//     }