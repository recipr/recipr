RecipeIngredients = new Mongo.Collection("recipe-ingredients");

Meteor.methods({
  saveRecipeIngredient: function (recipeId, IngredientId, quanitity, unit) {

    RecipeIngredients.insert({
        recipe_id: recipeId,
        ingredient_id: IngredientId,
        quanitity: quanitity,
        unit: unit,
        createdAt: new Date(),
    });
  },

  deleteRecipeIngredientsByRecipeId: function(recipeId){
    RecipeIngredients.remove({recipe_id: recipeId});
  }
});