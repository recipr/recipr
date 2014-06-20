App.RecipesIngredientsRoute = Ember.Route.extend({
  controllerName: 'recipes',
  setupController: function(controller) {
    controller.set('showIngredients', true);
    controller.set('showPreparation', false);
  },
});
