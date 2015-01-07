Recipes = new Mongo.Collection("recipes");

Meteor.methods({
  saveRecipe: function (data, recipeId) {

    var validData = {
      title: data.title,
      intro: data.intro,
      ingredients: data.ingredients,
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
    return recipeId;
  },

  deleteRecipe: function (recipeId) {
    Recipes.remove(recipeId);
  }
});