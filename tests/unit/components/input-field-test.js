import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('input-field', 'InputFieldComponent', {
  needs: ['template:partials/input-error'],
});

test('it renders', function() {
  expect(2);
  var component = this.subject();
  equal(component._state, 'preRender');
  this.append();
  equal(component._state, 'inDOM');
});

test('has input element', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  equal($component.find('input').length, 1);
});


test('input has dynamic type', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  var $input = $component.find('input');
  equal($input.attr('type'), 'text');

  Ember.run(function(){
    component.set('type', 'password');
  });

  equal($input.attr('type'), 'password');
});

test('input has dynamic placeholder', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  var $input = $component.find('input');
  equal($input.attr('placeholder'), '');

  Ember.run(function(){
    component.set('placeholder', 'password');
  });

  equal($input.attr('placeholder'), 'password');
});

test('form-field handles autocomplete', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  var $input = $component.find('input');

  Ember.run(function(){
    component.set('autocomplete', 'off');
  });

  equal($input.attr('autocomplete'), 'off');
});

test('fires _validate on focus-out', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onValidate', 'externalAction');
  component.set('targetObject', targetObject);

  var $input = $component.find('input');
  $input.trigger('focusout');
});


test('fires _validate on focus-out', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onValidate', 'externalAction');
  component.set('targetObject', targetObject);

  var $input = $component.find('input');
  $input.trigger('focusout');
});

test('input has error class when not isValid', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  var $input = $component.find('input');
  equal($input.hasClass('input-error'), false);

  Ember.run(function(){
    component.set('isValid', false);
  });

  equal($input.hasClass('input-error'), true);
});

test('checks for required property', function() {
  expect(3);

  var component = this.subject();
  component.set('value', '');
  component.send('validate');

  equal(component.get('isValid'), true);

  Ember.run(function(){
    component.set('required', true);
    component.send('validate');
  });

  equal(component.get('isValid'), false);

  Ember.run(function(){
    component.set('required', false);
    component.send('validate');
  });

  equal(component.get('isValid'), true);
});

test('checks for valid regex pattern', function() {
  expect(3);

  var component = this.subject();
  component.set('value', 'test');
  component.send('validate');

  equal(component.get('isValid'), true);

  Ember.run(function(){
    component.set('pattern', /^\d{4}\w{4}$/);
    component.send('validate');
  });

  equal(component.get('isValid'), false);

  Ember.run(function(){
    component.set('value', '1234abcd');
    component.send('validate');
  });

  equal(component.get('isValid'), true);
});

test('trim value on validate', function() {
  expect(1);

  var component = this.subject();
  component.set('value', '   test   ');
  component.send('validate');

  equal(component.get('value'), 'test');
});

test('trim value bevore required', function() {
  expect(2);

  var component = this.subject();
  component.set('value', '      ');
  component.set('required', true);
  component.send('validate');

  equal(component.get('value'), '');
  equal(component.get('isValid'), false);
});

test('no validate on value change', function() {
  expect(0);

  var component = this.subject();

  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onValidate', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.set('value', 'test');
  });
});

test('validates on value change if isValid is false', function() {
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
    component.set('isValid', false);
    component.set('value', 'test');
  });
});
