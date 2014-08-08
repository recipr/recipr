import Ember from 'ember';

var Router = Ember.Router.extend({
    location: ReciprAppENV.locationType
});

Router.map(function() {
    this.route('index', { path: '/' });
    this.route('dashboard');

    this.resource('recipe', { path: '/recipe/:recipe_id' }, function(){
        this.route('preparation');
        this.route('ingredients');
    }) 

    this.resource('recipes');

    this.resource('settings', function() {
        this.route('user');
        this.route('security');
        this.route('recipes');
    });
  this.route('test');
});

export default Router;
