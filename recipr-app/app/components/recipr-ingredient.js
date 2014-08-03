import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['recipr-ingredient'],

    quantity: '',
    unit: '',
    name: '',

    ingredient: null,

    actions: {
      remove: function(){
        this.sendAction('remove', this.get('ingredient'));
      },
    }
});
