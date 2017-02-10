import { Recipe } from './../recipe';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelectEvent = new EventEmitter<Recipe>();
  recipe: Recipe = new Recipe("Dummy", "A dummy recipe", "http://www.logodesignlove.com/images/classic/nba-logo.jpg");
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelectEvent.emit(recipe);
  }

}
