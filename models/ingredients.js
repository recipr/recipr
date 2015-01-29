Ingredients = new Mongo.Collection("ingredients");

Meteor.methods({
  addIngredient: function (name) {
    var ingredient = Ingredients.findOne({name: name});
    
    if(ingredient){
      return ingredient._id;
    }

    var ingredientId = Ingredients.insert({
        name: name,
        createdAt: new Date(),
        modifiedAt: new Date(),
    });

    return ingredientId;
  },

  saveIngredient: function (data, ingredientId) {
    if(!ingredientId){
      return;
    }

    var self = this,
        ingredient = {
          name: data.name,
          description: data.description,
          url: data.url,
          image: data.image,
          dateModified: new Date(),
        };

    this.init = function(){
      self.sanitize();
      self.validate();
      self.save();
    };

    this.sanitize = function(){
      //sanitize name
      //sanitize description
      //sanitize url
    };

    this.validate = function(){
      //validate name
    };

    /**
    * Save ingredient to collection. 
    */
    this.save = function(){
      Ingredients.update(ingredientId, {
        $set: ingredient
      });
    };

    this.init();
  },

  deleteIngredient: function (ingredientId) {
    Ingredients.remove(ingredientId);
  }
});