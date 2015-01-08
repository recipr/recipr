RecipeEditController = RouteController.extend({
  template: 'recipe',
  
	data: function(){
    Meteor.subscribe('Recipe', this.params._id);
    return Recipes.findOne({_id: this.params._id});
  },
});
