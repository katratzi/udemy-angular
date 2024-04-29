import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAdd() {

    const name = this.nameInputRef.nativeElement.value;
    const amount = Number(this.amountInputRef.nativeElement.value);

    const newIngredient = new Ingredient(name, amount);
    this.ingredientAdded.emit(newIngredient);

  }

}
