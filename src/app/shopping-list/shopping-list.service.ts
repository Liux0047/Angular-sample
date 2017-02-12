import { Ingredient } from './../ingredient';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];
  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(old: Ingredient, newItem: Ingredient)  {
    this.items[this.items.indexOf(old)] = newItem;
  }

  deleteItem(item: Ingredient) {
    this.items.splice(this.items.indexOf(item), 1);
  }

}
