Meteor.publish("Recipes", function () {
  return Recipes.find();
});