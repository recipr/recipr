Template.recipes.events({
  "click .add-recipe": function (event) {
    Router.go('recipe.new');
    return false;
  },
});

Template.recipes.helpers({
  hasRecipes: function(){
    return this.count();
  }
});