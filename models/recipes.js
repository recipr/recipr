Recipes = new Mongo.Collection("recipes");

Meteor.methods({
  saveRecipe: function (data, recipeId) {

    var sections = [];
    data.sections.forEach(function(section) {

      var steps = [];
      section.steps.forEach(function(step){
        steps.push({
          order: step.order,
          content: step.content,
        });
      });

      var recipeIngredients = [];
      section.ingredients.forEach(function(recipeIngredient){
        recipeIngredients.push({
          quantity: recipeIngredient.quantity,
          unit: recipeIngredient.unit,
          order: recipeIngredient.order,
          name: recipeIngredient.name
        });
      });

      sections.push({
        name: section.name,
        steps: steps,
        ingredients: recipeIngredients,
      });
    });

    var validData = {
      title: data.title,
      intro: data.intro,
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

    /*
    if(data.ingredients.length){
      data.ingredients.forEach(function(ingredient){
        Meteor.call('saveIngredient', ingredient.name);
      });
    }
    */

    return recipeId;
  },

  deleteRecipe: function (recipeId) {
    Recipes.remove(recipeId);
  }
});