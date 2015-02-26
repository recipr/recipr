Meteor.publish("Ingredients", function () {
  return Ingredients.find({userId: this.userId});
});