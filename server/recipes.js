Meteor.publish("Recipes", function () {
  return Recipes.find();
});

Meteor.publish("Recipe", function (recipeId) {
  var recipeCursor = Recipes.find({_id: recipeId});
  return recipeCursor
});