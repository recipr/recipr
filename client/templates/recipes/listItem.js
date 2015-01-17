Template.listItem.events({
  "click .edit-recipe": function (event) {
    Router.go('recipe.edit', {_id: this._id});
    return false;
  },
  "click .delete-recipe": function (event) {
    Session.set('show-confirm', true);
    return false;
  },
  'click .confirm .accept-confirm': function(event, template){
    Meteor.call('deleteRecipe', template.data._id);
    return false;
  }
});

Template.listItem.helpers({
  meta: function(){
    var meta = moment(this.dateCreated).format('MMMM DD, YYYY');
    return meta;
  },

  showConfirm: function(){
    return Session.get('show-confirm');
  }
});