Template.recipeIngredient.events({
  "click .delete-ingredient": function (event) {
    RecipeIngredients.remove({_id: this._id});
  }
});
