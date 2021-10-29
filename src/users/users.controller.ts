//import {Body, Controller, Delete, Get, Param, Post, Put, Redirect} from '@nestjs/common';
import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common'

import { UsersService } from './users.service'
import { User } from './users.entity'
import { UpdateUserDto } from './dto/update-user.dto'
import { UserDto } from './dto/user.dto'
import { UpdateResult } from 'typeorm'

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    // Запрос на создание или обновление записи
    @Post('')
    //    @Redirect('/login.html')
    create_update(
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<UpdateResult> | Promise<User> | string {
        let xxx = this.usersService.create_update(updateUserDto)
        return (
            'Пользователь добавлен<br><a href="/login.html">Вход</a><br><a href="/index.html">На главную</a><br>' +
            xxx
        )
    }

    // Запрос на создание или обновление записи
    @Post('login')
    login(
        @Body() userDto: UserDto,
    ): Promise<UpdateResult> | Promise<User | string> {
        let xxx = this.usersService.login(userDto)
        return xxx
        //         return 'Успешно зашли<br><a href="/index.html">На главную</a><br>';
    }

    // Запрос на мягкое удаление записи
    //    @Delete('/delete/:id')
    @Get('/delete/:id')
    @Redirect('/')
    remove(@Param('id') id: string): Promise<void> {
        return this.usersService.remove(id)
    }

    // Запрос на восстановление мягко удаленной записи
    @Get('/undelete/:id')
    @Redirect('/')
    undelete(@Param('id') id: string): Promise<void> {
        return this.usersService.undelete(id)
    }

    // Запрос на получение всех записей
    @Get('/all')
    getUsers(): Promise<User[]> {
        return this.usersService.findAll()
    }

    // Запрос на получение мягко удалённых записей
    @Get('/deleted')
    findSoftDeleted(): Promise<User[]> {
        return this.usersService.findSoftDeleted()
    }

    // Запрос на получение записи по имени
    @Get('/name/:name')
    findByName(@Param('name') name: string): Promise<User[]> {
        return this.usersService.findByName(name)
    }

    // Запрос на получение записи по id
    // Получаю по одной записи именно в массиве чтобы упросить фронтенд
    @Get('/id/:id')
    findById(@Param('id') id: string): Promise<User[]> {
        return this.usersService.findById(id)
    }

    // Запрос на получение ОДНОЙ записи по id
    @Get('/1/:id')
    findOne(@Param('id') id: string): Promise<User | undefined> {
        return this.usersService.findOneById(id)
    }

    @Get('/5')
    x() {
        return '555'
    }
}
