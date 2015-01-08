Recipes = new Mongo.Collection("recipes");

Meteor.methods({
  saveRecipe: function (data, recipeId) {

    var validData = {
      title: data.title,
      intro: data.intro,
      dateModified: new Date()
    }

    if(!recipeId){
      validData.dateCreated = new Date();
      recipeId = Recipes.insert(validData);
    } else {
      Recipes.update(recipeId, {
        $set: validData
      });
    }

    Meteor.call('deleteRecipeIngredientsByRecipeId', recipeId);

    if(data.ingredients.length){
      data.ingredients.forEach(function(ingredient){
        var ingredientId = Meteor.call('saveIngredient', ingredient.name);

        Meteor.call(
          'saveRecipeIngredient', 
          recipeId, 
          ingredientId, 
          ingredient.quantity, 
          ingredient.unit 
        );
      });
    }

    return recipeId;
  },

  deleteRecipe: function (recipeId) {
    Recipe.remove(recipeId);
  }
});