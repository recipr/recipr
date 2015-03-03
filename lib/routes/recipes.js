RecipesController = PrivateController.extend({
  template: 'recipes',
  data: function(){
    Meteor.subscribe("Recipes");
    return Recipes.find({});
  }
});