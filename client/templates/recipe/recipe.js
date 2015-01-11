Sections = new Mongo.Collection(null);
RecipeIngredients = new Mongo.Collection(null);
Steps = new Mongo.Collection(null),

Template.recipe.created = function(){

  var self = this;
  this.init = function(){
    Sections.remove({});
    if(this.data && this.data.sections){
      self.insertSections(this.data.sections);
    } else {
      self.addDefaultSection();
    }
  }

  /**
  * Inserts recipe sections into local 'Section' collection
  * @param {Array} sections list of sections
  */
  this.insertSections = function(sections){
    sections.forEach(function(section){
      var sectionId = Sections.insert({
          name: section.name,
      });

      self.insertIngredients(section.ingredients, sectionId);
      self.insertSteps(section.steps, sectionId);
    });
  }

  /**
  * Adds a default Section to local 'Sections' collection
  */
  this.addDefaultSection = function(){
    Sections.insert({
        name: 'default',
        isDefault: true,
    });
  }

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
  }

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
  }

  this.init();
}

Template.recipe.events({
	"submit .recipe-form": function (event) {
		var title = event.target.title.value;

    if(event.target.intro){
      var intro = event.target.intro.value;
    } else {
      var intro = this.intro;
    }

    var sections = Sections.find().fetch();

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

    var recipeId = this._id ? this._id : null;
    var data = {
        title: title,
        intro: intro,
        sections: sections,
        status: 'draft'
    };

    Meteor.call("saveRecipe", data, recipeId);
		Router.go('/recipes');
		return false;
	}
});

Template.recipe.helpers({
  sections: function(){
    return Sections.find();
  },

  showIntro: function(){
    return Settings.findOne({
      type: 'gui',
      key: 'showIntro',
    }).value || this.intro.length;
  },
})

