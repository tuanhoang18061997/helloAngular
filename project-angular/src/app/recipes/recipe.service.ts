import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('A Another Test Recipe', 'This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/200323BBCGOODFOODAUGUSTCOVERANDSTORY007616-e588480.jpg?quality=90&webp=true&resize=300,272')
  ];

  getRecipes(){
    return this.recipes.slice();
  }
}
