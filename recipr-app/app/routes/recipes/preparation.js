import Ember from 'ember';

export default Ember.Route.extend({
    controllerName: 'recipes',

    setupController: function(controller) {
        controller.set('showIngredients', false);
        controller.set('showPreparation', true);
    },
});
