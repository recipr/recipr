import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('form-field', 'FormFieldComponent', {
  needs: ['template:partials/input-error'],
});

test('it renders', function() {
  expect(2);
  var component = this.subject();
  equal(component._state, 'preRender');
  this.append();
  equal(component._state, 'inDOM');
});

test('has form-field class', function() {
  expect(1);

  var component = this.subject();
  this.append();
  equal(component.classNames.contains('form-field'), true);
});

test('show error element if showError isTrue', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  equal($component.find('.error-message').length, 0);

  Ember.run(function(){
    component.set('showError', true);
    component.set('errorMessage', 'test');
  });

  equal($component.find('.error-message').length, 1);
});

test('show error message if showError is true', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();
  var expected = 'test';

  Ember.run(function(){
    component.set('showError', true);
    component.set('errorMessage', expected);
  });

  equal($component.find('.error-message').text(), expected);
});

test('has _validate method', function() {
  expect(0);

  var component = this.subject();

  Ember.run(function(){
    component._validate();
  });
});

test('isValid is initially true', function() {
  expect(1);

  var component = this.subject();

  Ember.run(function(){
    equal(component.get('isValid'), true);
  });
});

test('errorMessage is initially empty', function() {
  expect(1);

  var component = this.subject();

  Ember.run(function(){
    equal(component.get('errorMessage'), '');
  });
});

test('fires onValidate event on validate action', function() {
  expect(1);

  var component = this.subject();
  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onValidate', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.send('validate');
  });
});

