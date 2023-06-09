import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [    // array
    new Recipe('A test recipe', 
    'This is simply a test', 
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg',
    [
        new Ingredient('chicken', 1),
        new Ingredient('butter', 1)
    ]),
    new Recipe ('Another Test Recipe',
    'This is simply a test',
    'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2-853x1024.jpg',
    [
        new Ingredient('chicken', 1),
        new Ingredient('Roti', 5)
    ])
  ];

constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
   }
}