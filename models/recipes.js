Recipes = new Mongo.Collection("recipes");

Meteor.methods({
  saveRecipe: function (data, recipeId) {

    var sections = [];
    data.sections.forEach(function(section) {
      sections.push({
        name: section.name
      });
    });

    var validData = {
      title: data.title,
      intro: data.intro,
      ingredients: data.ingredients,
      sections: sections,
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

    if(data.ingredients.length){
      data.ingredients.forEach(function(ingredient){
        Meteor.call('saveIngredient', ingredient.name);
      });
    }

    return recipeId;
  },

  deleteRecipe: function (recipeId) {
    Recipes.remove(recipeId);
  }
});