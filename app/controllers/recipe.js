import Ember from 'ember';

export default Ember.Controller.extend(Ember.Evented, {

  titleIsValid: true,

  init: function(){
    console.log('insert recipe');
    console.log(this.get('model'));
  },

  actions: {
    updateRecipe: function(){
      this._updateRecipe();
    }
  },

  _updateRecipe: function(){
    console.log('controller trigger validate');

    this.trigger('validate');
    if(!this.get('titleIsValid')){
      return;
    }

    //this.get('model').save();
    //this.transitionToRoute('recipes');
  }
});
