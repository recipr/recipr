LocalRecipes = new Mongo.Collection(null);
Sections = new Mongo.Collection(null);
RecipeIngredients = new Mongo.Collection(null);
Steps = new Mongo.Collection(null);

Template.recipe.created = function(){

  var self = this;
  this.init = function(){
    Sections.remove({recipeId: this.data._id});
    if(this.data && this.data.sections){
      self.insertSections(this.data.sections);
    } else {
      self.addDefaultSection();
    }
  };

  /**
  * Inserts recipe sections into local 'Section' collection
  * @param {Array} sections list of sections
  */
  this.insertSections = function(sections){
    var recipeId = this.data._id;
    sections.forEach(function(section){
      var sectionId = Sections.insert({
          recipeId: recipeId,
          name: section.name,
      });

      self.insertIngredients(section.ingredients, sectionId);
      self.insertSteps(section.steps, sectionId);
    });
  };

  /**
  * Adds a default Section to local 'Sections' collection
  */
  this.addDefaultSection = function(){
    Sections.insert({
        recipeId: this.data._id,
        name: 'default',
        isDefault: true,
    });
  };

  /**
  * Inserts section ingredients into local 'RecipeIngredients' collection
  * @param {Array} sections list of ingredients
  * @param {String} sectionId id of Section 
  */
  this.insertIngredients = function(ingredients, sectionId){
    ingredients.forEach(function(ingredient){
      var loadedIngredient = Ingredients.findOne(ingredient.ingredientId);
      if(loadedIngredient && loadedIngredient.name){
        ingredient.name = loadedIngredient.name;
        ingredient.sectionId = sectionId;
        RecipeIngredients.insert(ingredient);
      }
    });
  };

  /**
  * Inserts section steps into local 'Steps' collection
  * @param {Array} sections list of steps
  * @param {String} sectionId id of Section 
  */
  this.insertSteps = function(steps, sectionId){
    steps.forEach(function(step){
      step.sectionId = sectionId;
      Steps.insert(step);
    });
  };

  this.init();
};

handleRecipeErrors = function(recipeId, errors){
  errors.forEach(function(error){
    switch(error.error){
        case 'title-error':
          LocalRecipes.update(recipeId, {$set: {titleError: error.reason}});
        break;
    }
  });
}

Template.recipe.events({
	"submit .recipe-form": function (event) {
    var self = this;
    var recipeId = this._id == 'new' ? null : this._id;
    var sections = Sections.find({recipeId: this._id}).fetch();

    sections.forEach(function(section){
      var ingredients = RecipeIngredients.find({
        sectionId: section._id
      });

      var steps = Steps.find({
        sectionId: section._id
      });

      section.steps = steps.fetch();
      section.ingredients = ingredients.fetch();
    });

    var data = {
        title: this.title,
        intro: this.intro,
        sections: sections,
        status: 'draft'
    };

    Meteor.call("saveRecipe", data, recipeId, function(error){
      if(error){
        handleRecipeErrors(self._id, [error]);
      } else {
        Router.go('/recipes');
      }
    });
		return false;
	},

  "keyup [name=title]": function(event){
    var title = event.target.value;
    var recipeId = this._id;

    Meteor.call("validateRecipeTitle", title, function(error){
      if(error){
        handleRecipeErrors(recipeId, [error]);
      } else {
        LocalRecipes.update(recipeId, {$set: {titleError: ''}});
      }
    });

    LocalRecipes.update(recipeId, {$set: {title: title}});
  },

  "keyup [name=intro]": function(event){
    var intro = event.target.value;
    LocalRecipes.update(this._id, {$set: {intro: intro}});
  },

  "click .show-ingredients": function(event){
    Session.set('recipe-tab', 'ingredients');
  },

  "click .show-preparation": function(event){
    Session.set('recipe-tab', 'preparation');
  },
});

Template.recipe.helpers({
  recipe: function(){
    return LocalRecipes.findOne({_id: this._id});
  },

  sections: function(){
    return Sections.find({recipeId: this._id});
  },

  showIntro: function(){
    var hasAlreadyIntro = this.intro ? this.intro.length : false;
    return Settings.findOne({
      type: 'gui',
      key: 'showIntro',
    }).value || hasAlreadyIntro;
  },

  showIngredients: function(){
    var tab = Session.get('recipe-tab');
    return tab === 'ingredients' || tab === undefined;
  },

  showPreparation: function(){
    return Session.get('recipe-tab') === 'preparation';
  },

  recipeTabs: {
    group: 'recipe-tab',
    tabs: [
      {
        name: 'ingredients',
        value: 'Ingredients',
        active: 1,
      },
      {
        name: 'preparation',
        value: 'Preparation'
      },
    ]
  }
});

