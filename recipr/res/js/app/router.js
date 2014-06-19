App.Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('recipes', { path: '/recipes/:recipe_id' }, function() {
    this.route('index', { path: '/' });
    this.route('preparation');
    this.route('ingredients');
  });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('recipes', '1');
    }
});
