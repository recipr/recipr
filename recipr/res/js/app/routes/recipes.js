App.RecipesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('recipe', params.recipe_id);
  }
});
