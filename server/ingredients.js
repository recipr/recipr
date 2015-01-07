Meteor.publish("Ingredients", function () {
  return Ingredients.find();
});