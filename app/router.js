import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("dashboard", { path: "/dashboard" });
  this.route("recipes", { path: "/recipes" });
  this.resource("recipe", { path: "/recipe" }, function(){
      this.route("edit", { path: '/edit/:recipe_id' });
      this.route("new");
  });
  this.route("settings", { path: "/settings" });
  this.route('recipe/edit');
  this.route('recipe/ingredients');
  this.route('recipe/preparation');
});

export default Router;
