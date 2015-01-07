RecipesController = RouteController.extend({
  template: 'recipes',
  data: {
    recipes: function(){
      Meteor.subscribe("Recipes");
      return Recipes.find({});
    }
  }
});
