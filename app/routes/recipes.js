import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    this.store.find('recipe');
    return this.store.filter('recipe', function(recipe){
      return !recipe.get('isNew');
    });
  }
});

