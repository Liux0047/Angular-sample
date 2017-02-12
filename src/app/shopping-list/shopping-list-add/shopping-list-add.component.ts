import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../ingredient';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit, OnChanges {
  @Input() item: Ingredient;
  @Output() cleared = new EventEmitter();
  isAdd = true;
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.isAdd = changes.item.currentValue === null;
  }

  onSubmit(ingredient: Ingredient) {
    ingredient = new Ingredient(ingredient.name, ingredient.amount);
    if (!this.isAdd) {
      this.sls.editItem(this.item, ingredient);
      this.onClear();
    } else {
      this.item = ingredient;
      this.sls.addItem(this.item);
    }
  }

  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.isAdd = true;
    this.cleared.emit(null);
  }
}
