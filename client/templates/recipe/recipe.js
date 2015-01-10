Sections = new Mongo.Collection(null);

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
  ingredients: function() {
    return Session.get("ingredients");
  },

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
  if(this.data && this.data.ingredients){
    Session.set('ingredients', this.data.ingredients);
  } else {
    Session.set('ingredients', []);
  }

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