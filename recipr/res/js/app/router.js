App.Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('recipes', function() {
    this.route('index', { path: '/' });
    this.route('edit');
  });
});
