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
        ingredients: ingredients
    };
    Meteor.call("saveRecipe", data, recipeId);
		
    if(ingredients.length){
      Meteor.call('saveIngredients', ingredients);
    }

		Router.go('/recipes');
		return false;
	},

  "click .add-ingredient": function(event, template){
    var $name = template.find('.new-ingredient');
    var name = $name.value;

    var $unit = template.find('.new-unit');
    var unit = $unit.value;

    var $quantity = template.find('.new-quantity');
    var quantity = $quantity.value;

    var ingredients = Session.get('ingredients');

    ingredients.push({
      name: name,
      quantity: quantity,
      unit: unit,
    });

    Session.set('ingredients', ingredients);

    $name.value = ''; 
    $unit.value = ''; 
    $quantity.value = ''; 

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