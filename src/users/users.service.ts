import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';
import { NewUserInput } from './dto/new-user.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create({ email, name }: NewUserInput): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
      },
    });
    return user;
  }
}
