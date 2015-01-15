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
  }
});
