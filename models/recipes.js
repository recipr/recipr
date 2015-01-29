Recipes = new Mongo.Collection("recipes");

Meteor.methods({
  saveRecipe: function (data, recipeId) {

    var self = this,
        recipe = {
          title: data.title,
          intro: data.intro,
          cover: data.cover,
          sections: [],
          dateModified: new Date(),
        },
        sections = [];

    this.init = function(){
      self.sanitize();
      self.validate();
      self.getSections(data.sections);
      self.save();
    };

    this.sanitize = function(){
      recipe.title = Meteor.call('sanitizeRecipeTitle', recipe.title);

    };

    this.validate = function(){
      Meteor.call('validateRecipeTitle', recipe.title);
    };

    /**
    * Save recipe to collection. 
    */
    this.save = function(){
      if(!recipeId){
        recipe.dateCreated = new Date();
        recipeId = Recipes.insert(recipe);
      } else {
        Recipes.update(recipeId, {
          $set: recipe
        });
      }
    };

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
    };

    /**
    * Extracts ingredients from sent section
    * @param {Object} section
    * @return {Array} ingredients 
    */
    this.getIngredients = function(section){
      var ingredients = [];
      section.ingredients.forEach(function(ingredient){
        var ingredientId = Meteor.call('addIngredient', ingredient.name);
        ingredients.push({
          quantity: ingredient.quantity,
          unit: ingredient.unit,
          order: ingredient.order,
          ingredientId: ingredientId
        });
      });
      return ingredients;
    };

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
    };

    this.init();
  },

  deleteRecipe: function (recipeId) {
    Recipes.remove(recipeId);
  }
});


Meteor.methods({
  sanitizeRecipeTitle: function (title) {
    return title.trim();
  },
});

Meteor.methods({
  validateRecipeTitle: function (title) {
    check(title, String);

    var error;

    if (title.length < 3) {
      error = new Meteor.Error("title-error",
        "Recipe title needs at least 3 characters");
    }

    if (title.length == 0){
      error = new Meteor.Error("title-error",
        "Recipe title is required");
    }

    if(!error){
      return true;
    }

    if(Meteor.isClient){
      return error; 
    } else {
      throw error;
    }
  },
});