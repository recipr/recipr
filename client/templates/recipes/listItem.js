Template.listItem.created = function(){
  this.showConfirm = new Blaze.ReactiveVar(false);
}

Template.listItem.events({
  "click .edit-recipe": function (event) {
    Router.go('recipe.edit', {_id: this._id});
    return false;
  },
  "click .delete-recipe": function (event, template) {
    template.showConfirm.set(true);
    return false;
  },
  'click .confirm .accept-confirm': function(event, template){
    Meteor.call('deleteRecipe', template.data._id);
    return false;
  },
  'click .confirm .cancel-confirm': function(event, template){
    template.showConfirm.set(false);
    return false;
  },
  'click .confirm .cover': function(event, template){
    template.showConfirm.set(false);
    return false;
  }
});

Template.listItem.helpers({
  meta: function(){
    var meta = moment(this.dateCreated).format(TAPi18n.__("global.date-format"));
    return meta;
  },

  showConfirm: function(){
    return Template.instance().showConfirm.get();
  },

  deleteMessage: function(){
    return TAPi18n.__("recipes.delete-message");
  },

  listAction: function(){
    return TAPi18n.__("recipes.delete-button");
  }
});