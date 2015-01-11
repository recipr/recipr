Recipes = new Mongo.Collection("recipes");

Meteor.methods({
  saveRecipe: function (data, recipeId) {

    var self = this,
        recipe = {
          title: data.title,
          intro: data.intro,
          sections: [],
          dateModified: new Date(),
        },
        sections = [];

    this.init = function(){
      self.getSections(data.sections);
      self.save();
    }

    /**
    * Save recipe to collection. 
    */
    this.save = function(){
      if(!recipeId){
        recipe.dateCreated = new Date();
        Recipes.insert(recipe);
      } else {
        Recipes.update(recipeId, {
          $set: recipe
        });
      }
    }

    /**
    * Extracts sections from sent recipe
    * @param {Array} sections
    */
    this.getSections = function(sections){
      sections.forEach(function(section) {
        var ingredients = self.getIngredients(section);
        var steps = self.getSteps(section);

        recipe.sections.push({
          name: section.name,
          steps: steps,
          ingredients: ingredients,
        });
      });
    }

    /**
    * Extracts ingredients from sent section
    * @param {Object} section
    * @return {Array} ingredients 
    */
    this.getIngredients = function(section){
      var ingredients = [];
      section.ingredients.forEach(function(ingredient){
        var ingredientId = Meteor.call('saveIngredient', ingredient.name);
        ingredients.push({
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          order: ingredient.order,
          ingredientId: ingredientId
        });
      });
      return ingredients;
    }

    /**
    * Extracts steps from sent section
    * @param {Object} section
    * @return {Array} steps 
    */
    this.getSteps = function(section){
     var steps = [];
      section.steps.forEach(function(step){
        steps.push({
          order: step.order,
          content: step.content,
        });
      });
      return steps;
    }

    this.init();
  },

  deleteRecipe: function (recipeId) {
    Recipes.remove(recipeId);
  }
});