Template.ingredients.events({
  'keyup .search-input, click .search-button': function(event, template){
    var value = template.find('.search-input').value;
    Session.set('ingredient-search', value);
  }
});

Template.ingredients.helpers({
  hasIngredients: function(){
    return this.count();
  },
  searchPlaceholder: function(){
    return TAPi18n.__("ingredients.search-placeholder");
  }
});