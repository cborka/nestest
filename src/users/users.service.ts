import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
//import { compare, genSalt, hash } from 'bcryptjs'
//import { Md5 } from 'ts-md5/dist/md5'

import { UserEntity } from './entities/user.entity'
import { UserDto } from './dto/user.dto'
//import { AuthService } from '../auth/auth.service'

@Injectable()
export class UsersService {
    //    private _circularDependencyService: AuthService

    constructor(
        @InjectRepository(UserEntity)
        private readonly usersRepository: Repository<UserEntity>,
    ) {}

    // Создание новой записи
    async create(userDto: UserDto): Promise<UserEntity> {
        return await this.usersRepository.save({
            name: userDto.name,
            surName: userDto.surName,
            login: userDto.login,
            password: userDto.password
//            password: Md5.hashStr(userDto.password),
        })
    }

    // Получить все записи (кроме удалённых однако)
    findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find()
    }

    privet(): string {
        return 'Привет, командир!'
    }
}