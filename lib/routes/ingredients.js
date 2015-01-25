IngredientsController = PrivateController.extend({
  data: function(){

    var search = Session.get('ingredient-search');
    var regex = new RegExp('^' + search, 'i');
    var searchObject = {
      'name': regex
    }

    Meteor.subscribe('Ingredients');
    return Ingredients.find(searchObject, 
      {sort: {name: 1}}
    );
  },
});
