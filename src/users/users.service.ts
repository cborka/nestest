import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult } from 'typeorm'
import { compare, genSalt, hash } from 'bcryptjs'
import { Md5 } from 'ts-md5/dist/md5'

import { User } from './users.entity'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserDto } from './dto/user.dto'
import { AuthService } from '../auth/auth.service'

@Injectable()
export class UsersService {
    //    private _circularDependencyService: AuthService

    constructor(
        @InjectRepository(User)
        private readonly usersRepository: Repository<User>,
        @Inject(forwardRef(() => AuthService))
        private readonly _authService: AuthService,
    ) {}

    // Создание новой записи
    async create(createUserDto: UpdateUserDto): Promise<User> {
        console.log('createUserDto.password ' + createUserDto.password)
        return await this.usersRepository.save({
            id: 0,
            email: createUserDto.email,
            password: Md5.hashStr(createUserDto.password),
            name: createUserDto.name,
        })
    }

    async login(input: UserDto): Promise<User | string> {
        const { id, name, email, password } = input

        const user = await this.usersRepository.findOne({
            name,
        })

        if (!user) {
            return `User ${user.id} ${name} not found `
        }

        if (Md5.hashStr(password) !== user.password) {
            return await `Invalid credentials ${user.id}`
        }

        return user
    }

    // Создание новой записи (from graphql)
    createUser(UserDto: UserDto): Promise<User> {
        const user = new User()
        user.name = UserDto.name
        user.email = UserDto.email
        user.password = UserDto.password

        return this.usersRepository.save(user)
    }

    // Обновление записи
    update(updateUserDto: UpdateUserDto): Promise<UpdateResult> {
        return this.usersRepository
            .createQueryBuilder()
            .update(User)
            .set({
                name: updateUserDto.name,
                email: updateUserDto.email,
                password: updateUserDto.password,
            })
            .where('id = :id', { id: updateUserDto.id })
            .execute()
    }

    // Обновить или создать запись
    create_update(
        updateUserDto: UpdateUserDto,
    ): Promise<UpdateResult> | Promise<User> {
        if (updateUserDto.id == 0) {
            return this.create(updateUserDto)
        } else {
            return this.update(updateUserDto)
        }
    }

    // Получить все записи (кроме удалённых однако)
    findAll(): Promise<User[]> {
        return this.usersRepository.find()
    }

    // Получить одну запись по id
    findOneById(id: string): Promise<User> {
        return this.usersRepository.findOne(id)
    }

    // Получить записи по имени
    findByName(name: string): Promise<User[]> {
        return this.usersRepository
            .createQueryBuilder('user')
            .where('user.name = :name', { name: name })
            .getMany()
    }

    // Получить записи по id
    findById(id: string): Promise<User[]> {
        return this.usersRepository
            .createQueryBuilder('user')
            .where('user.id = :id', { id: id })
            .withDeleted()
            .getMany()
    }

    // Получить мягко удаленные зиписи
    findSoftDeleted(): Promise<User[]> {
        return this.usersRepository
            .createQueryBuilder('user')
            .where('user.deletedAt IS NOT NULL')
            .withDeleted()
            .getMany()
    }

    // Мягко удалить запись
    async remove(id: string): Promise<void> {
        await this.usersRepository.softDelete(id)
    }

    // Восстановить мягко удалённую запись
    async undelete(id: string): Promise<void> {
        await this.usersRepository.restore(id)
    }
}
