import { Module } from '@nestjs/common';

import { RecipesResolver } from './recipes.resolver';
import { RecipesService } from './recipes.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [RecipesResolver, RecipesService, PrismaService],
})
export class RecipesModule {}
