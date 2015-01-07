RecipeEditController = RouteController.extend({
  template: 'recipe',
  
	data: function(){
    Meteor.subscribe('Recipes');
    return Recipes.findOne({_id: this.params._id});
  },
});
