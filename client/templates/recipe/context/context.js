Template.recipeContext.events({
  "click .change-setting": function (event) {
    var value = event.target.checked;
    var key = event.target.dataset.key;
    Meteor.call('setSetting', 'gui', key, value)
  },
  "click .menu-header": function(){
    return Session.set('showContextMenu', false);
  },
});

Template.recipeContext.helpers({
  settings: function(){
    return Settings.find({type: 'gui'});
  }
});