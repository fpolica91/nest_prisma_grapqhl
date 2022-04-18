import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { NewUserInput } from './dto/new-user.input';
import { UserService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Mutation(() => User)
  async createUser(
    @Args('NewUserInput')
    { email, name }: NewUserInput,
  ): Promise<User> {
    const user = await this.usersService.create({ email, name });
    return user;
  }
}
