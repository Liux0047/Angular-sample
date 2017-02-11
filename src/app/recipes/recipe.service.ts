import { Ingredient } from './../ingredient';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('Dummy1', 'A dummy recipe', 'http://www.pycomall.com/images/P1/NBA_Team_Logos_Cleveland_Cavaliers_Vector_Format.jpg', [
      new Ingredient('Fries', 2),
      new Ingredient('Pork', 1)
    ]),
    new Recipe('Dummy2', 'A dummy recipe', 'https://www.oracle.com/us/assets/c63-oow-warriors-logo-2716739.png', [
      new Ingredient('Veggie', 3),
      new Ingredient('Beef', 4)
    ]),
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

}
