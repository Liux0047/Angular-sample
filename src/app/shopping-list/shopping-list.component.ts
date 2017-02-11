import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './../ingredient';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  items: Ingredient[];

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
    this.items = this.sls.getItems();
  }

}
