App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('/recipes/1/ingredients'); 
    },
});
