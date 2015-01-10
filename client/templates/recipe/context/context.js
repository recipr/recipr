Template.recipeContext.events({
  "click .change-setting": function (event) {
    var value = event.target.checked;
    var key = event.target.dataset.key;
    Meteor.call('setSetting', 'gui', key, value)
  }
});

Template.recipeContext.helpers({
  settings: function(){
    return Settings.find({type: 'gui'});
  }
});