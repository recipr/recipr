App.RecipesController = Ember.ObjectController.extend({
  showIngredients: true,
  showPreparation: false,
  
  hasMultipleSections: function() {
    var sections = this.get('model.sections');
    return sections.get('length') > 1 ? true : false;
  }.property('model.@each.sections')
});
