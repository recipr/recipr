IngredientsController = RouteController.extend({

  waitOn: function () {
    return Meteor.subscribe('Ingredients');
  },
  
  data: function(){
    return {
      ingredients: function(){
        return Ingredients.find({});
      }
    } 
  },
});
