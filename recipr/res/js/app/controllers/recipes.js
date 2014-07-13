App.RecipesController = Ember.ObjectController.extend({
  showIngredients: true,
  showPreparation: false,

  newIngredient: '',
  ingredientError: false,
  cover: null,

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
        if(ingredient){
            this.set('ingredientError', false);
            section.get('ingredients').pushObject(ingredient);
        } else {
            this.set('ingredientError', true);
        }
    },

    addTag: function(name){
        name = this.filterWhitespaces(name);
        if(name.length){
            var tag = this.store.createRecord('tag', {
                name: name
            });
            this.get('tags').pushObject(tag);
        }
    },

    removeTag: function(tag){
        if(!tag){
            tag = this.get('tags.lastObject');
        }
        this.get('tags').removeObject(tag);
    },

    onCoverChange: function(data){
        this.set('cover', data.base64);
    }
  },

  createIngredientFromName: function(name){
      name = this.filterWhitespaces(this.get('newIngredient'));
      var match = this.regex.exec(name);

      var ingredient = this.store.createRecord('ingredient', {
        quantity: match[1] ? match[1] : "1",
        unit: match[3] ? match[3] : "",
        name: match[4] ? match[4] : ""
      });

      if(!ingredient.get('name')){
          return false;
      }

      this.set('newIngredient', '');
      return ingredient;
  },

  filterWhitespaces: function(text){
      return text.replace(/\s{2,}/g, ' ').trim();
  }
});
