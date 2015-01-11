RecipeEditController = RouteController.extend({
  template: 'recipe',
  
  waitOn:function(){
    return [
      Meteor.subscribe('Recipe', this.params._id),
      Meteor.subscribe('Ingredients', this.params._id),
      Meteor.subscribe('Settings')
    ];
  },

	data: function(){
    return Recipes.findOne({_id: this.params._id});
  },

  onRun: function(){
    Session.set('hasContextMenu', true);
    this.next();
  },

  onStop: function(){
    Session.set('hasContextMenu', false);
  }
});
