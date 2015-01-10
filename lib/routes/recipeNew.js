RecipeNewController = RouteController.extend({
  template: 'recipe',

  waitOn:function(){
    return Meteor.subscribe('Settings');
  },
});
