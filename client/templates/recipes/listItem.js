Template.listItem.events({
  "click .edit-recipe": function (event) {
    Router.go('recipe.edit', {_id: this._id});
    return false;
  },
  "click .delete-recipe": function (event) {
    Meteor.call('deleteRecipe', this._id);
    return false;
  }
});