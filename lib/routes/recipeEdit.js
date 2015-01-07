RecipeEditController = RouteController.extend({
	template: 'recipe',

  waitOn: function () {
    return Meteor.subscribe('Recipes');
  },

	data: function(){
    var self = this;
    return {
      recipe: function(){
      	return Recipes.findOne({_id: self.params._id});
      },
      isNew: false
    } 
  },
});
