part of recipr;

@Component(
  selector: "recipe-ingredients",
  templateUrl: 'packages/recipr/components/recipe-ingredients/recipe-ingredients.html',
  useShadowDom: false
)
class RecipeIngredientsComponent {
  @NgTwoWay('recipe')
  Recipe recipe;

  NgForm ingredientsForm;
  String newIngredient;

  void create() {
    if(newIngredient == null
        || newIngredient.length == 0
        || !Ingredient.isValidString(newIngredient)){
      return;
    }

    Ingredient ingredient = new Ingredient.fromString(newIngredient);
    recipe.ingredients.add(ingredient);
    newIngredient = '';
  }

  void delete(Ingredient ingredient) {
    recipe.ingredients.remove(ingredient);
  }
}