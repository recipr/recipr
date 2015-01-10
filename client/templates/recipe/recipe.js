Sections = new Mongo.Collection(null);
RecipeIngredients = new Mongo.Collection(null);
Steps = new Mongo.Collection(null),

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

Template.recipe.created = function(){
  Sections.remove({});
  if(this.data && this.data.sections){
    this.data.sections.forEach(function(section){

      var sectionId = Sections.insert({
          name: section.name,
      });

      //Insert steps
      if(section.steps){
        section.steps.forEach(function(step){
          step.sectionId = sectionId;
          Steps.insert(step);
        });
      }

      //Insert ingredients
      if(section.ingredients){
        section.ingredients.forEach(function(ingredient){
          ingredient.sectionId = sectionId;
          RecipeIngredients.insert(ingredient);
        });
      }
    });
  } else {
    Sections.insert({
        name: 'default',
        isDefault: true,
    });
  }
}