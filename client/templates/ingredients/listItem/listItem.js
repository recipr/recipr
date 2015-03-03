Template.ingredientsListItem.events({
  "click .edit-ingredient": function (event) {
    Router.go('ingredient.edit', {_id: this._id});
    return false;
  },
});