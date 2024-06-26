import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef

  constructor(private shoppingListService: ShoppingListService) { }

  onAdd() {

    // create new ingredient
    const name = this.nameInputRef.nativeElement.value;
    const amount = Number(this.amountInputRef.nativeElement.value);
    const newIngredient = new Ingredient(name, amount);
    // add
    this.shoppingListService.addIngredient(newIngredient)

  }

}
