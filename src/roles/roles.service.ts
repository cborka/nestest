// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
//
// import { RoleEntity } from './role.entity'
// import {RoleInput} from "./role.input";
//
// @Injectable()
// export class RolesService {
//     constructor(
//         @InjectRepository(RoleEntity)
//         private readonly rolesRepository: Repository<RoleEntity>,
//     ) {}
//
//     // Создание новой записи
//     async createRole(roleInput: RoleInput): Promise<RoleEntity> {
//         try {
//             return await this.findOneByName(roleInput.name);
//         }
//         catch (e) {
//             return await this.rolesRepository.save({
//                 name: roleInput.name
//             })
//         }
//     }
//
//     // Получить все записи
//     findAll(): Promise<RoleEntity[]> {
//         return this.rolesRepository.find()
//     }
//
//     // Получить одну запись по id
//     async findOneById(id: string | undefined): Promise<RoleEntity | undefined> {
//         if (id){
//             return await this.rolesRepository.findOneOrFail(id)
//         }
//         return await undefined
//     }
//
//     // Получить одну запись по name
//     async findOneByName(roleName: string): Promise<RoleEntity> {
//         return await this.rolesRepository
//             .createQueryBuilder('status')
//             .where('role.name = :roleName', {roleName: roleName})
//             .withDeleted()
//             .getOneOrFail()
//     }
//
// }