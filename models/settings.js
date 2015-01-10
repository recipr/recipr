Settings = new Mongo.Collection("settings");

Meteor.methods({
  setSetting: function (type, key, value) {
    Settings.upsert({
      type: type,
      key: key,
    }, {
      $set: {
        type: type,
        key: key,
        value: value,
      }
    });
  },

  getSetting: function (type, key) {
    return Settings.findOne({
      type: type,
      key: key,
    });
  }
});