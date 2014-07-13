window.App = Ember.Application.create({
    LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.route('index', { path: '/' });
  this.resource('recipes', { path: '/recipes/:recipe_id' }, function() {
    this.route('index', { path: '/' });
    this.route('preparation');
    this.route('ingredients');
  });
});

App.ReciprHeaderComponent = Ember.Component.extend({
    classNames: ['recipr-header']
});

App.ReciprIngredientComponent = Ember.Component.extend({
    classNames: ['recipr-ingredient'],

    quantity: '',
    unit: '',
    name: '',

    ingredient: null,

    actions: {
      remove: function(){
        this.sendAction('remove', this.get('ingredient'));
      },
    }
});

App.ReciprTagsComponent = Ember.Component.extend({
    classNames: ['recipr-tags'],

    tags: [],
    newTag: '',

    actions: {
        removeTag: function(tag){
            this.sendAction('remove', tag);
        }
    },

    keyDown: function(evt) {
        var code = evt.keyCode;
        switch(code){
            case 13:
            case 32:
                this.addTag();
                evt.preventDefault();
                break;
            case 8:
                this.removeLastTag(evt);
                break;
        }
    },

    addTag: function() {
        this.sendAction('add', this.get('newTag'));
        this.set('newTag', '');
    },

    removeLastTag: function(evt) {
        if(this.get('newTag.length') > 0) {
            return;
        }
        evt.preventDefault();
        this.sendAction('remove');
    }
});

App.ReciprUploadComponent = Ember.Component.extend({
    classNames: ['recipr-upload'],
    tagName: 'label',
    files: [],

    change: function(evt) {
        var input = evt.target;
        if (!Ember.isEmpty(input.files)) {
            this.set('files', input.files);
            this.getFile();
        }
    },

    getFile: function(){
        var file = this.get('files')[0];
        var reader = new FileReader();
        var instance = this;
        reader.onload = function(evt) {
            instance.sendAction('upload', {
                'file': file,
                'base64': reader.result
            });
        };
        reader.readAsDataURL(file);
    }
});
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

App.Ingredient = DS.Model.extend({
  section: DS.belongsTo('section'),
  name: DS.attr('string'),
  unit: DS.attr('string'),
  quantity: DS.attr('string')
});

App.Ingredient.FIXTURES = [
 {
   "id": 1,
   "name": "Potatoes (Big)",
   "unit": "",
   "quantity": "10"
 },
 {
   "id": 2,
   "name": "Water",
   "unit": "ml",
   "quantity": "200"
 },
 {
   "id": 3,
   "name": "Sugar",
   "unit": "Cups",
   "quantity": "3/4"
 }
];

App.Recipe = DS.Model.extend({
    name: DS.attr('string'),
    url: DS.attr('string'),
    sections: DS.hasMany('section', { async: true }),
    tags: DS.hasMany('tag', { async: true })
});

App.Recipe.FIXTURES = [
    {
        "id": 1,
        "name": "Ground beef with carrots and mashed potatoes",
        "url": "http://www.example.com",
        "sections": [1],
        "tags": [1, 2, 3, 4, 5]
    },
    {
        "id": 2,
        "name": "Potato Mash",
        "url": "http://www.example.com"
    }
];

App.Section = DS.Model.extend({
  recipe: DS.belongsTo('recipe'),
  name: DS.attr('string'),
  preparation: DS.attr('string'),
  preparationTime: DS.attr('int'),
  ingredients: DS.hasMany('ingredient', { async: true })
});

App.Section.FIXTURES = [
 {
   "id": 1,
   "name": "Test Section 1",
   "ingredients": [1, 2, 3]
 }
];

App.Tag = DS.Model.extend({
  recipe: DS.belongsTo('tag'),
  name: DS.attr('string')
});

App.Tag.FIXTURES = [
    {
        "id": 1,
        "name": "tag1"
    },
    {
        "id": 2,
        "name": "tag2"
    },
    {
        "id": 3,
        "name": "tag3"
    },
    {
        "id": 4,
        "name": "tag4"
    },
    {
        "id": 5,
        "name": "tag5"
    }
];

App.IndexRoute = Ember.Route.extend({
    redirect: function() {
        this.transitionTo('/recipes/1/ingredients'); 
    },
});

App.RecipesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('recipe', params.recipe_id);
  }
});

App.RecipesIngredientsRoute = Ember.Route.extend({
  controllerName: 'recipes',
  setupController: function(controller) {
    controller.set('showIngredients', true);
    controller.set('showPreparation', false);
  },
});

App.RecipesPreparationRoute = Ember.Route.extend({
  controllerName: 'recipes',
  setupController: function(controller) {
    controller.set('showIngredients', false);
    controller.set('showPreparation', true);
  },
});

App.ApplicationView = Ember.View.extend({
    classNames: ["container"]
});

App.FileInput = Ember.TextField.extend({
    type: 'file',
    attributeBindings: ['multiple'],
    multiple: false,
    files: [],
    change: function(e) {
        var input = e.target;
        if (!Ember.isEmpty(input.files)) {
            this.set('files', input.files);
        }
    }
});
App.RecipesView = Ember.View.extend({
    classNames: ["recipeEdit"]
});
