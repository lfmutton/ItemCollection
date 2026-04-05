import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'src/generated/prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    async user(
        userWhereUniqueInput: Prisma.UserWhereUniqueInput
    ): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: userWhereUniqueInput
        });
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserWhereUniqueInput;
        where?: Prisma.UserWhereInput;
        orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
        const { skip, take, cursor, where, orderBy} = params;
        return this.prisma.user.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy
        });
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({
            data
        });
    }
    
    async deleteuser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
            where
        });
    }
}
