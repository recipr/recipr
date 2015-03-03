Template.recipeContext.events({
  "click .change-setting": function (event) {
    var value = event.target.checked;
    var key = event.target.dataset.key;

    Meteor.call('setSetting', 'recipe', key, value);
  },
  "click .menu-header": function(){
    return Session.set('showContextMenu', false);
  },
});

Template.recipeContext.helpers({
  settings: function(){
    var settings = [];
    var recipeSettings = Meteor.user().profile.settings.recipe;

    for(var key in recipeSettings){
      recipeSettings[key]['key'] = key;
      settings.push(recipeSettings[key]);
    }
    
    return settings;
  }
});