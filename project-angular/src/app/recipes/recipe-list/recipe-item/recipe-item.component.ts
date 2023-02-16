import { Component, Input, Output, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem: Recipe;
  // @Output() recipeSelected = new EventEmitter<(void)>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected(){
    console.log("clicked");
    // this.recipeSelected.emit();
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }
}
