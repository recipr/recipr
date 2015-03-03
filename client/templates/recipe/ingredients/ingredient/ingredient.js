Template.recipeIngredient.created = function(){
  this.editMode = new Blaze.ReactiveVar();
  this.editMode.set(false);
}

Template.recipeIngredient.events({
  "click .delete-ingredient": function (event) {
    RecipeIngredients.remove({_id: this._id});
  },

  "click .edit-ingredient": function (event, template) {
    template.editMode.set(true);
  },

  "click .save-ingredient": function (event, template) {
    var $quantity = template.find('.quantity .input');
    var $name = template.find('.name .input');

    var regex = /^([\d.,\/]*)(\s*(.+))/;


    var quantity;
    var name;
    var unit;

    name = $name.value.trim();

    if(name.length < 3){
      return false;
    }  

    var match = regex.exec($quantity.value.trim());

    if(match){
      if(match[1] !== null){
        quantity = match[1].trim();
      }

      if(match[3] !== null){
        unit = match[3].trim();
      }

      if(quantity.length === 0 && unit.length !== 0){
        quantity = unit;
        unit = "";
      }
    }

    RecipeIngredients.update(this._id, {  $set: {
      name: name,
      quantity: quantity,
      unit: unit,
    }});

    template.editMode.set(false);
  }
});

Template.recipeIngredient.helpers({
  'inEditMode': function(){
    return Template.instance().editMode.get();
  }
});