import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateRecipe: function(){
      this._updateRecipe();
    }
  },

  _updateRecipe: function(){
    this.get('model').save();
    this.transitionToRoute('recipes');
  }
});
