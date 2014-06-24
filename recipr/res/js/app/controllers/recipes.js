App.RecipesController = Ember.ObjectController.extend({
  showIngredients: true,
  showPreparation: false,

  hasMultipleSections: function() {
    var sections = this.get('model.sections');
    return sections.get('length') > 1 ? true : false;
  }.property('model.sections.length'),

  actions: {
    addSection: function(){
      var section = this.store.createRecord('Section');
      var sections = this.get('model.sections');
      sections.pushObject(section);
    },

    removeIngredient: function(ingredient){
        ingredient.deleteRecord();
    },

    addIngredient: function(data){
        var ingredient = this.store.createRecord('ingredient', {
          quantity: data.quantity,
          unit: data.unit,
          name: data.name
        });
        data.section.get('ingredients').pushObject(ingredient);
    },
  }
});
