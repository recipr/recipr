IngredientEditController = PrivateController.extend({  
  template: 'ingredient',

  waitOn:function(){
    return [
      Meteor.subscribe('Ingredients', this.params._id),
    ];
  },

  data: function(){
    return Ingredients.findOne({_id: this.params._id});
  }
});
