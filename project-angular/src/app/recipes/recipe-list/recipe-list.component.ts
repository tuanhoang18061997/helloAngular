import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test','https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('A Another Test Recipe', 'This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2013/05/200323BBCGOODFOODAUGUSTCOVERANDSTORY007616-e588480.jpg?quality=90&webp=true&resize=300,272')
  ];

  constructor() { }

  ngOnInit(): void {
    this.recipes.forEach(recipeEl => {
      console.log('The current recipe is ', recipeEl)
    })
  }

  onRecipeSelected(recipe: Recipe){
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
  onCheckElement(recipe: Recipe){
    console.log(recipe);
  }
}
