import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("dashboard", { path: "/dashboard" });
  this.route("recipes", { path: "/recipes" });
  this.resource("recipeedit", { path: "/recipe/edit/:recipe_id" });
  this.resource("recipenew", { path: "/recipe/new" });
  this.route("settings", { path: "/settings" });
});

export default Router;
