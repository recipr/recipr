Settings = new Mongo.Collection("settings");

Meteor.methods({
  setSetting: function (type, key, value) {
    var key = "profile.settings." + type + "." + key + '.value';
    var setting = {};
    setting[key] = value;

    Meteor.users.update({_id:Meteor.user()._id}, {$set:setting});
  }
});

