import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('recipe-form', 'RecipeFormComponent', {
  needs: ['component:form-field']
});

var model = Ember.Object.extend({
  title: 'test'
});

test('it renders', function() {
  expect(2);

  var component = this.subject();

  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('has _update method', function() {
  expect(0);

  var recipe = model.create();
  var component = this.subject();
  Ember.run(function(){
    component.set('recipe', recipe);
    component._update();
  });
});

test('fires onUpdate event on update action', function() {
  expect(1);

  var recipe = model.create();
  var component = this.subject();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onUpdate', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.set('recipe', recipe);
    component.send('update');
  });
});

test('titleIsValid is initally true', function() {
  expect(1);
  var component = this.subject();
  equal(component.get('titleIsValid'), true);
});

test('titleIsValid is false after update if title is not valid', function() {
  expect(1);

  var recipe = model.create();
  var component = this.subject();

  Ember.run(function(){
    recipe.set('title', ''); //title to short
    component.set('recipe', recipe);
    component.send('update');
  });

  equal(component.get('titleIsValid'), false);
});

test('titleIsValid is true on update after error is resolved', function() {
  expect(1);

  var recipe = model.create();
  var component = this.subject();

  Ember.run(function(){
    recipe.set('title', ''); //title to short
    component.set('recipe', recipe);
    component.send('update');

    recipe.set('title', '123');
    component.send('update');
  });

  equal(component.get('titleIsValid'), true);
});


test('titleIsValid is not set on title changes', function() {
  expect(1);

  var recipe = model.create();
  var component = this.subject();

  Ember.run(function(){
    recipe.set('title', ''); //title to short
    component.set('recipe', recipe);
  });

  equal(component.get('titleIsValid'), true);
});

test('titleIsValid is true after error is resolved without update', function() {
  expect(1);

  var recipe = model.create();
  var component = this.subject();

  Ember.run(function(){
    recipe.set('title', ''); //title to short
    component.set('recipe', recipe);
    component.send('update');

    recipe.set('title', '123');
  });

  equal(component.get('titleIsValid'), true);
});

test('do not save without title', function() {
  expect(0);

  var recipe = model.create();
  var component = this.subject();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onUpdate', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    recipe.set('title', '');
    component.set('recipe', recipe);
    component.send('update');
  });
});

test('do not save when title has less than 3 characters', function() {
  expect(0);

  var recipe = model.create();
  var component = this.subject();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onUpdate', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    recipe.set('title', '12');
    component.set('recipe', recipe);
    component.send('update');
  });
});

test('whitespaces in title gets trimmed', function() {
  expect(3);

  var recipe = model.create();
  var component = this.subject();

  Ember.run(function(){
    recipe.set('title', '  test  ');

    component.set('recipe', recipe);
    component.send('update');
  });

  equal(recipe.get('title.length'), 4);

  Ember.run(function(){
    recipe.set('title', '\ntest\n');
    equal(recipe.get('title.length'), 6);
    component.set('recipe', recipe);
    component.send('update');
  });

  equal(recipe.get('title.length'), 4);
});

test('titleError is initially empty', function() {
 expect(1);

  var recipe = model.create();
  var component = this.subject();
  var $component = this.append();

  equal(component.get('titleError.length') === 0, true, 'titleError should be empty');
});

test('titleError is set on title error', function() {
 expect(1);

  var recipe = model.create();
  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    recipe.set('title', '12');
    component.set('recipe', recipe);
    component.send('update');
  });

  equal(component.get('titleError.length') === 0, false, 'titleError should not be empty');
});

test('titleError is empty after error is resolved', function() {
  expect(1);

  var recipe = model.create();
  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    recipe.set('title', '12');
    component.set('recipe', recipe);
    component.send('update');
  });

  Ember.run(function(){
    recipe.set('title', '123');
    component.set('recipe', recipe);
    component.send('update');
  });

  equal(component.get('titleError.length') === 0, true, 'titleError should be empty');
});
