import Ember from 'ember';

export default Ember.Controller.extend({
  recipes: [],

  actions: {
    editRecipe: function(recipe){
      this.transitionToRoute('recipeedit', recipe);
    },
    deleteRecipe: function(recipe){
      recipe.deleteRecord();
      recipe.save();
    },
    createRecipe: function(){
      this.transitionToRoute('recipenew');
    }
  }
});

