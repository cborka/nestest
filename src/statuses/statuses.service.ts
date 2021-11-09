// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
//
// import { StatusEntity } from './status.entity'
// import { StatusInput } from './status.input'
//
// @Injectable()
// export class StatusesService {
//     constructor(
//         @InjectRepository(StatusEntity)
//         private readonly statusesRepository: Repository<StatusEntity>,
//     ) {}
//
//     // Создание новой записи
//     async createStatus(statusInput: StatusInput): Promise<StatusEntity> {
//         try {
//             return await this.findOneByName(statusInput.name);
//         }
//         catch (e) {
//             return await this.statusesRepository.save({
//                 name: statusInput.name
//             })
//         }
//     }
//
//     // Получить все записи
//     findAll(): Promise<StatusEntity[]> {
//         return this.statusesRepository.find()
//     }
//
//     // Получить одну запись по id
//     findOneById(id: string): Promise<StatusEntity | undefined> {
//         return this.statusesRepository.findOne(id)
//     }
//
//     // Получить одну запись по name
//     async findOneByName(statusName: string): Promise<StatusEntity> {
//         return await this.statusesRepository
//             .createQueryBuilder('status')
//             .where('status.name = :statusName', {statusName: statusName})
//             .withDeleted()
//             .getOneOrFail()
//     }
// }
