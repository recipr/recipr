IngredientsController = RouteController.extend({

  data: function(){
    Meteor.subscribe('Ingredients');
    return Ingredients.find({});
  },
});
