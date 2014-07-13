App.Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('recipes', { path: '/recipes/:recipe_id' }, function() {
    this.route('index', { path: '/' });
    this.route('preparation');
    this.route('ingredients');
  });
});
