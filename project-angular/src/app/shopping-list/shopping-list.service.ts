import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients: Ingredient[] = [
   new Ingredient('Apple', 5),
   new Ingredient('Tomatoes', 10)
  ];

  ingredientChanged = new EventEmitter<Ingredient[]>();

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    console.log("shopping-list recived: ", ingredient);

    this.ingredients.push(ingredient);
    console.log(this.ingredients.slice());
    this.ingredientChanged.emit(this.ingredients.slice())
  }

  addIngredientsFromRecipeDetail(ingredients: Ingredient[]){
    console.log(ingredients);
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
