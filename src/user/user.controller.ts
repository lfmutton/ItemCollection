import { Controller, Param, Get, Delete, Body, Post } from '@nestjs/common';
import { UserService } from './user.service.js';
import { User as UserModel } from 'src/generated/prisma/client';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Post()
    async signupUser(
        @Body() userData: {username: string}
    ): Promise<UserModel>{
        return this.userService.createUser(userData)
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<UserModel | null> {
        return this.userService.user({ id: Number(id)})
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id: string): Promise<UserModel> {
        return this.userService.deleteuser({ id: Number(id)})
    }
}
