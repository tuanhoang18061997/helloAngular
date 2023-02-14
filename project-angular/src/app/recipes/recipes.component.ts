import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  // = {name: 'abc', description: 'tesst', imagePath: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/200323BBCGOODFOODAUGUSTCOVERANDSTORY007616-e588480.jpg?quality=90&webp=true&resize=300,272'}
  constructor() { }

  ngOnInit(): void {
  }

  check(recipeSelected: Recipe){
    console.log(recipeSelected);
  }
}
