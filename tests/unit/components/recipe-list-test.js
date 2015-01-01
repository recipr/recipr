import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('recipe-list', 'RecipeListComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function() {
  expect(2);

  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});


test('redirects onEdit event', function() {
  expect(1);

  var component = this.subject();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onEdit', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.send('onEdit');
  });
});

test('redirects onDelete event', function() {
  expect(1);

  var component = this.subject();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onEdit', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.send('onEdit');
  });
});
