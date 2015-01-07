Template.recipeIngredients.events({
  "click .add-ingredient": function(event, template){
    var $name = template.find('.new-ingredient');
    var name = $name.value;

    var $unit = template.find('.new-unit');
    var unit = $unit.value;

    var $quantity = template.find('.new-quantity');
    var quantity = $quantity.value;

    var ingredients = Session.get('ingredients');

    ingredients.push({
      name: name,
      quantity: quantity,
      unit: unit,
    });

    Session.set('ingredients', ingredients);

    $name.value = ''; 
    $unit.value = ''; 
    $quantity.value = ''; 

    return false;
  }
});