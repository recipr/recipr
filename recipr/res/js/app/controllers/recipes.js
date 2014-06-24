App.RecipesController = Ember.ObjectController.extend({
  showIngredients: true,
  showPreparation: false,

  newIngredient: '',

  regex: /^([\d.,\/]*)(\s*([^\W]*)\s+(.*))?/i,

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

    addIngredient: function(section){
        var ingredient = this.createIngredientFromName();
        section.get('ingredients').pushObject(ingredient);
    },
  },

  createIngredientFromName: function(name){
      name = this.filterWhitespaces(this.get('newIngredient'));
      var match = this.regex.exec(name);

      var ingredient =this.store.createRecord('ingredient', {
        quantity: match[1] ? match[1] : "1",
        unit: match[3] ? match[3] : "",
        name: match[4] ? match[4] : ""
      });
      this.set('newIngredient', '');
      return ingredient;
  },

  filterWhitespaces: function(text){
      return text.replace(/\s{2,}/g, ' ').trim();
  }
});
