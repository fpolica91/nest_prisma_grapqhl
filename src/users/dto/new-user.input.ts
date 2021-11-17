import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @IsOptional()
  @Field(() => [String], { nullable: true })
  recipe?: string[];
}
