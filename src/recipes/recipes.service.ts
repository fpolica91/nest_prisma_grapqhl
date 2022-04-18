import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async create({
    ingredients,
    title,
    description,
  }: NewRecipeInput): Promise<Recipe> {
    try {
      const recipe = await this.prisma.recipe.create({
        data: {
          title,
          description,
          ingredients,
          userId: 'ckw314w3100070vlub5h0c6fz',
        },
      });
      return recipe;
    } catch (e) {
      console.log(e.message);
    }
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    const recipes = await this.prisma.recipe.findMany({});
    return recipes as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
