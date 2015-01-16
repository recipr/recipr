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

Template.listItem.helpers({
  meta: function(){
    var meta = moment(this.dateCreated).format('MMMM DD, YYYY');
    return meta;
  }
});