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
    const recipe = await this.prisma.recipe.create({
      data: {
        title,
        description,
        ingredients,
      },
    });
    return recipe;
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
