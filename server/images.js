Meteor.publish("Images", function () {
  return Images.find();
});
