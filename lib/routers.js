
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', {
  name: 'recipes'
});

Router.route('/recipe/new', function(){
  this.render();
  this.render('recipeContext', {to: 'contextMenu'});
},{
  name: 'recipe.new'
});

Router.route('/recipe/edit/:_id', function(){
  this.render();
  this.render('recipeContext', {to: 'contextMenu'});
},{
  name: 'recipe.edit'
});

Router.route('/ingredients', {
  name: 'ingredients'
});

Router.route('/ingredient/edit/:_id', {
  name: 'ingredient.edit'
});

Router.route('/login', {
  name: 'login',
  layoutTemplate: 'HeadlessLayout'
});

Router.route('/setup', {
  name: 'setup',
  layoutTemplate: 'HeadlessLayout'
});

