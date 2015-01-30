Template.ingredient.events({
  "submit .ingredient-form": function (event, template) {
    var self = this;

    var data = {
        name: template.find('[name=name]').value,
        description: template.find('.description').innerHTML,
        url: template.find('[name=url]').value,
        image: this.image,
    };

    Meteor.call("saveIngredient", data, this._id, function(error){
      if(error){
        handleIngredientErrors(self._id, [error]);
      } else {
        Router.go('ingredients');
      }
    });
    return false;
  },

  "keyup [name=name]": function(event){
    var name = event.target.value;
    //validate name
  },

  "keyup [name=description]": function(event){
    var description = event.target.value;
    //validate description
  },

  "keyup [name=url]": function(event){
    var url = event.target.value;
    //validate url
  },
});

handleIngredientErrors = function(ingredientId, errors){
  errors.forEach(function(error){
    switch(error.error){
      case 'name-error':
        //handle errors
      break;
    }
  });
}