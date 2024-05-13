import { EventEmitter } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model"

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>()

    // manage shopping list and ingredient
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ing of ingredients) {
        //     this.addIngredient(ing)
        // }

        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}