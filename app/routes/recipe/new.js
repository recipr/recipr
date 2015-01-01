import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'recipe',

  model: function() {
    return this.store.createRecord('recipe', {});
  },
});
