Meteor.publish("Recipes", function () {
  return Recipes.find({userId: this.userId});
});

Meteor.publish("Recipe", function (recipeId) {
  var recipeCursor = Recipes.find({_id: recipeId, userId: this.userId});
  return recipeCursor;
}); 