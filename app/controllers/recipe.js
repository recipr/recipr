import Ember from 'ember';

export default Ember.Controller.extend(Ember.Evented, {

  titleIsValid: true,

  actions: {
    updateRecipe: function(){
      this._updateRecipe();
    }
  },

  _updateRecipe: function(){
    this.trigger('validate');
    if(!this.get('titleIsValid')){
      return;
    }

    this.get('model').save();
    this.transitionToRoute('recipes');
  }
});
