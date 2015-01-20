
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/recipes');

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

Router.route('/login', {
  name: 'login',
  layoutTemplate: 'HeadlessLayout'
});

Router.route('/setup', {
  name: 'setup',
  layoutTemplate: 'HeadlessLayout'
});

