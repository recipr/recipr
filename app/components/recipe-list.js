import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onEdit: function(recipe){
      this.sendAction('onEdit', recipe);
    },
    onDelete: function(recipe){
      this.sendAction('onDelete', recipe);
    }
  }
});
