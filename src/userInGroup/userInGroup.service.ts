// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
//
// import {UserInGroupEntity} from './userInGroup.entity'
// import {UserInGroupInput} from "./userInGroup.input";
//
//
// @Injectable()
// export class UserInGroupService {
//     constructor(
//         @InjectRepository(UserInGroupEntity)
//         private readonly usersInGroupRepository: Repository<UserInGroupEntity>,
//     ) {}
//
//     // Создание новой записи
//     async createUserInGroup(userInGroupInput: UserInGroupInput): Promise<UserInGroupEntity> {
//         return await this.usersInGroupRepository.save({
//             userId: userInGroupInput.userId,
//             groupId: userInGroupInput.groupId,
//         })
//     }
//
//     // Получить все записи
//     findAll(): Promise<UserInGroupEntity[]> {
//         return this.usersInGroupRepository.find()
//     }
// }
