import Ember from 'ember';

export default Ember.Controller.extend({
  recipes: [],

  actions: {
    editRecipe: function(recipe){
      this.transitionToRoute('recipe.edit', recipe);
    },
    deleteRecipe: function(recipe){
      recipe.deleteRecord();
      recipe.save();
    }
  }
});

