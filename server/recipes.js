Meteor.publish("Recipes", function () {
  return Recipes.find();
});

Meteor.publish("Recipe", function (recipeId) {
  var self = this;
  var recipeCursor = Recipes.find({_id: recipeId});

  var recipeIngredientsCursor = RecipeIngredients.find({
    recipe_id: recipeId
  });

  var ingredientsObservers = {};
  var recipeIngredientsObservers = recipeIngredientsCursor.observe({
    added: function(newDoc){
      var ingredientsCursor = Ingredients.find({_id: newDoc.ingredient_id});
      ingredientsObservers[newDoc.ingredient_id] = ingredientsCursor.observeChanges({
        added: function(id, fields){
          self.added('ingredients', id, fields);
        },
        changed: function(id, fields){
          self.changed('ingredients', id, fields);
        },
        removed: function(id){
          self.removed('ingredients', id);
        },
      });
    },

    removed: function(oldDoc){
      self.removed('ingredients', oldDoc.ingredient_id, fields);
      ingredientsObservers[oldDoc.ingredient_id].stop();
    }
  });

  this.onStop(function(){
    recipeIngredientsObservers.stop();
  });

  return [recipeCursor, recipeIngredientsCursor]
});