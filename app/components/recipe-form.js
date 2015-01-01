import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['fill-content'],

  recipe: undefined,
  titleIsValid: true,

  showIngredients: true,
  showPreparation: Ember.computed.not('showIngredients'),

  titleError: function(){
    return this.get('titleIsValid') ? '' : 'Title needs at least 3 characters';
  }.property('titleIsValid'),

  isValid: function(){
    return this.get('titleIsValid');
  }.property('titleIsValid'),

  actions: {
    update: function(){
      this._update();
    },
    validateTitle: function(){
      this._sanitizeTitle();
      this._validateTitle();
    },
    showIngredients: function(){
      this.set('showIngredients', true);
    },
    showPreparation: function(){
      this.set('showIngredients', false);
    }
  },

  _update: function(){
    this._sanitize();
    this._validate();

    if(this.get('isValid')){
      this.sendAction('onUpdate');
    }
  },

  _sanitize: function(){
    this._sanitizeTitle();
  },

  _sanitizeTitle: function(){
    if(!this.recipe.get('title')){
      this.recipe.set('title', '');
    }
    this.recipe.set('title', this.recipe.get('title').trim());
  },

  _validate: function(){
    this._validateTitle();
  },

  _validateTitle: function(){
    this.set('titleIsValid', this.recipe.get('title.length') >= 3);
  },

  _validateTitleOnError: function(){
    if(!this.get('titleIsValid')){
      this._sanitizeTitle();
      this._validateTitle();
    }
  }.observes('recipe.title'),
});
