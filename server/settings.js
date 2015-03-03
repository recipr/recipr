Meteor.publish("Settings", function () {
  return Settings.find({userId: this.userId});
});
