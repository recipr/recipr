RecipeNewController = RouteController.extend({
  template: 'recipe',

  waitOn:function(){
    return Meteor.subscribe('Settings');
  },

  onRun: function(){
    Session.set('hasContextMenu', true);
    this.next();
  },

  onStop: function(){
    Session.set('hasContextMenu', false);
  },

  data: function(){
    return LocalRecipes.findOne({_id: 'new'});
  },

  onBeforeAction: function(){
    LocalRecipes.remove({_id: 'new'});
    LocalRecipes.insert({
      _id: 'new',
      title: '',
    });
    this.next();
  }
});
