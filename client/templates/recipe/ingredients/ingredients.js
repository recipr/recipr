Template.recipeIngredients.events({
  "click .add-ingredient": function(event, template){
    var $name = template.find('.new-ingredient');
    var value = $name.value;

    var regex = /^([\d.,\/]*)(\s*([^\W]*)(\s*(.*)))/;

    var match = regex.exec(value);

    var quantity;
    var name;
    var unit;

    var ingredientCount = RecipeIngredients.find({
      sectionId: Template.parentData()._id
    }).count();


    if(value.trim().length < 3){
      return false;
    }

    if(match[1] != null){
      quantity = match[1].trim();
    }

    if(match[3] != null){
      unit = match[3].trim();
    }

    if(match[5] != null){
      name = match[5].trim();
    }

    if(name.length === 0 && unit.length === 0){
      name = quantity.trim();
      quantity = "";
    }

    if(name.length === 0 && unit.length !== 0){
      name = unit;
      unit = '';
    }

    RecipeIngredients.insert({
      sectionId: Template.parentData()._id,
      name: name,
      quantity: quantity,
      unit: unit,
      order: ingredientCount + 1,
    });

    $name.value = ''; 

    return false;
  }
});