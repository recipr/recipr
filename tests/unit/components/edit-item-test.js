import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('edit-item', 'EditItemComponent', {});

test('it renders', function() {
  expect(2);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('has edit method', function() {
  expect(0);

  var component = this.subject();
  Ember.run(function(){
    component._edit();
  });
});

test('has delete method', function() {
  expect(0);

  var component = this.subject();
  Ember.run(function(){
    component._delete();
  });
});

test('fires onEdit event on edit action', function() {
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
    component.send('edit');
  });
});

test('onEdit event sends model', function() {
  expect(1);

  var model = {name: 'test'};
  var component = this.subject();
  var targetObject = {
    externalAction: function(data){
      equal(data, model);
    }
  };

  component.set('onEdit', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.set('model', model);
    component.send('edit');
  });
});

test('fires onDelete event on delete action', function() {
  expect(1);

  var component = this.subject();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onDelete', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.send('delete');
  });
});

test('onDelete event sends model', function() {
  expect(1);

  var model = {name: 'test'};
  var component = this.subject();

  var targetObject = {
    externalAction: function(data){
      equal(data, model);
    }
  };

  component.set('onDelete', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.set('model', model);
    component.send('delete');
  });
});

test('shows meta element only when meta is set', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  equal($component.find('.meta').length, 0);

  Ember.run(function(){
    component.set('meta', 'test');
  });

  equal($component.find('.meta').length, 1);
});

test('meta contains meta field', function() {
  expect(1);

  var testString = 'TestString';
  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    component.set('meta', testString);
  });

  equal($component.find('.meta').text(), testString);
});

test('has edit button', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  equal($component.find('.edit').length, 1);
});

test('has delete button', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  equal($component.find('.delete').length, 1);
});
