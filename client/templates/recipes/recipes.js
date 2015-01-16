Template.recipes.events({
  "click .add-recipe": function (event) {
    Router.go('recipe.new');
    return false;
  },
});

Template.recipes.helpers({
  hasRecipes: function(){
    console.log(this);
    return this.count();
  }
});