Template.recipe.events({
	"submit .recipe-form": function (event) {
		var title = event.target.title.value;

    if(Session.get('showIntro')){
      var intro = event.target.intro.value;
    } else {
      var intro = '';
    }

    var ingredients = Session.get('ingredients');

    var recipeId = this._id ? this._id : null;

    var data = {
        title: title,
        intro: intro,
        ingredients: ingredients,
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

  showIntro: function(){
    return Session.get('showIntro');
  }
})

Template.recipe.created = function(){
  if(this.data && this.data.ingredients){
    Session.set('ingredients', this.data.ingredients);
  } else {
    Session.set('ingredients', []);
  }
}