import { Module } from '@nestjs/common';

import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [UsersResolver, UserService, PrismaService],
})
export class UsersModule {}
