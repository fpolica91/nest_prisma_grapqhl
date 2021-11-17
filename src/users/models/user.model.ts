import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Recipe } from '../../recipes/models/recipe.model';

@ObjectType({ description: 'user ' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  email: string;

  @Field()
  name: string;

  @Field(() => [String], { nullable: true })
  recipe?: string[];
}
