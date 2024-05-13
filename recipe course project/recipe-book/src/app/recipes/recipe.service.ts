import { Recipe } from "./recipe.model";

export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Simply a test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg'),
        new Recipe('A Second Recipe', 'Another test', 'https://cdn.stocksnap.io/img-thumbs/960w/food-recipe_G8QICMKLUV.jpg')
    ];

    getRecipes() {
        // return new array that's exact copy (no not reference)
        return this.recipes.slice();
    }
}