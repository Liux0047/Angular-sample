import { RecipeService } from './../recipes/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rs: RecipeService) { }

  ngOnInit() {
  }

  onStore() {
    this.rs.storeData().subscribe(
      (data) => console.log(data),
      (data) => console.log(data)
    );
  }

}
