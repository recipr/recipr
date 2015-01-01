import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('form-field', 'FormFieldComponent', {
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

test('has form-field class', function() {
  expect(1);

  var component = this.subject();
  this.append();
  equal(component.classNames.contains('form-field'), true);
});

test('yields content', function() {
 expect(1);

  var component = this.subject();
  var $component = this.append();
  var $content = document.createElement('SPAN');
  $content.classList.add('test-span');
  $component.append($content);

  equal($component.find('.test-span').length, 1);
});

test('show error element if error provided', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  equal($component.find('.error-message').length, 0);

  Ember.run(function(){
    component.set('error', 'test');
  });

  equal($component.find('.error-message').length, 1);
});

test('show error element if error provided', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();
  var expected = 'test';

  Ember.run(function(){
    component.set('error', expected);
  });

  equal($component.find('.error-message').text(), expected);
});

