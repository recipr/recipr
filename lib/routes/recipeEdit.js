RecipeEditController = RouteController.extend({
  template: 'recipe',
  
  waitOn:function(){
    return Meteor.subscribe('Recipe', this.params._id);
  },

	data: function(){
    return Recipes.findOne({_id: this.params._id});
  },
});
