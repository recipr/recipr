import Ember from 'ember';

var Router = Ember.Router.extend({
    location: ReciprAppENV.locationType
});

Router.map(function() {
    this.route('index', { path: '/' });
    this.route('dashboard');

    this.resource('recipes', function() {
        this.route('recipe');
        this.route('preparation');
        this.route('ingredients');
    });

    this.resource('settings', function() {
        this.route('user');
        this.route('security');
        this.route('recipes');
    });
});

export default Router;
