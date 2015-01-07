  Template.ingredients.events({
  "click .delete-ingredient": function (event) {
    Meteor.call('deleteIngredient', this._id);
    return false;
  }
});