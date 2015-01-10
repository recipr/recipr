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

    var ingredients = Session.get('ingredients');
    var sections = Sections.find().fetch();

    var recipeId = this._id ? this._id : null;

    var data = {
        title: title,
        intro: intro,
        ingredients: ingredients,
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
      Sections.insert({
          name: section.name,
      });
    });
  } else {
    Sections.insert({
        name: 'default',
        isDefault: true,
    });
  }
}