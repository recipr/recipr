Ingredients = new Mongo.Collection("ingredients");

Meteor.methods({
  saveIngredient: function (name) {
    var ingredient = Ingredients.findOne({name: name});
    if(ingredient){
      return
    }
    Ingredients.insert({
        name: name,
        createdAt: new Date(),
        modifiedAt: new Date(),
    });
  },

  saveIngredients: function(ingredients){
    if(ingredients.length){
      ingredients.forEach(function(ingredient){
        Meteor.call('saveIngredient', ingredient.name);
      });
    }
  },

  deleteIngredient: function (ingredientId) {
    Ingredients.remove(ingredientId);
  }
});