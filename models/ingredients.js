Ingredients = new Mongo.Collection("ingredients");

Meteor.methods({
  saveIngredient: function (name) {
    var ingredient = Ingredients.findOne({name: name});
    
    if(ingredient){
      return ingredient._id;
    }

    var ingredientId = Ingredients.insert({
        name: name,
        createdAt: new Date(),
        modifiedAt: new Date(),
    });

    return ingredientId;
  },

  deleteIngredient: function (ingredientId) {
    Ingredients.remove(ingredientId);
  }
});