Meteor.publish("Settings", function () {
  return Settings.find();
});
