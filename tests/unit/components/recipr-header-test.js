import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('recipr-header', 'ReciprHeaderComponent', {});

test('it renders', function() {
  expect(2);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('has title', function() {
  expect(1);

  var testString = 'test title';

  var component = this.subject();
  this.append();

  Ember.run(function(){
    component.set('title', testString);
  });

  equal(component.title, testString);
});

test('menuState is initialy closed', function() {
  expect(1);

  var component = this.subject();
  equal(component.menuState, false);
});

test('has _toggleMenu method', function() {
  expect(0);

  var component = this.subject();
  Ember.run(function(){
    component._toggleMenu();
  });
});

test('_toggleMenu sets class on menuButton', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    component.set('menuState', true);
  });
  equal($component.find('.menu-toggle')[0].classList.contains('open'), true);

  Ember.run(function(){
    component.set('menuState', false);
  });

  equal($component.find('.menu-toggle')[0].classList.contains('open'), false);

});

test('fires onToggleMenu event on toggleMenu action', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onToggleMenu', 'externalAction');
  component.set('targetObject', targetObject);

  Ember.run(function(){
    component.send('toggleMenu');
  });
});

test('fire onToggleMenu event on menu button click', function() {
  expect(1);

  var component = this.subject();
  var $component = this.append();

  var targetObject = {
    externalAction: function(){
      ok(true, 'external action was called!');
    }
  };

  component.set('onToggleMenu', 'externalAction');
  component.set('targetObject', targetObject);

  $component.find('.menu-toggle').click();
});

test('ContextMenuState is initialy closed', function() {
  expect(1);

  var component = this.subject();
  equal(component.contextMenuState, false);
});

test('has _toggleContextMenu method', function() {
  expect(0);

  var component = this.subject();
  Ember.run(function(){
    component._toggleContextMenu();
  });
});


test('_toggleContextMenu method chanes between true/false', function() {
  expect(2);

  var component = this.subject();
  Ember.run(function(){
    component._toggleContextMenu();
  });

  equal(component.contextMenuState, true);

  Ember.run(function(){
    component._toggleContextMenu();
  });

  equal(component.contextMenuState, false);
});


test('_toggleContextMenu sets class on contextMenuButton', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    component.set('contextMenuState', true);
  });
  equal($component.find('.context-menu')[0].classList.contains('open'), true);

  Ember.run(function(){
    component.set('contextMenuState', false);
  });

  equal($component.find('.context-menu')[0].classList.contains('open'), false);
});


test('no cover when contextMenuState is closed', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    component.set('contextMenuState', true);
  });
  equal($component.find('.cover').length, 1);

  Ember.run(function(){
    component.set('contextMenuState', false);
  });

  equal($component.find('.cover').length, 0);

});
