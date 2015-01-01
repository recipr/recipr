import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('recipr-sidebar', 'ReciprSidebarComponent', {});

test('it renders', function() {
  expect(2);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('isOpen is initialy true', function() {
  expect(1);

  var component = this.subject();
  equal(component.isOpen, true);
});

test('has openSidebar method', function() {
  expect(0);

  var component = this.subject();
  Ember.run(function(){
    component.openSidebar();
  });
});

test('has closeSidebar method', function() {
  expect(0);

  var component = this.subject();
  Ember.run(function(){
    component.closeSidebar();
  });
});

test('has toggleSidebar method', function() {
  expect(0);

  var component = this.subject();
  Ember.run(function(){
    component.toggleSidebar();
  });
});


test('toggleSidebar toggles isOpen', function() {
  expect(2);

  var component = this.subject();
  Ember.run(function(){
    component.toggleSidebar();
  });

  equal(component.isOpen, false);

  Ember.run(function(){
    component.toggleSidebar();
  });

  equal(component.isOpen, true);
});

test('openSidebar sets isOpen to true', function() {
  expect(1);

  var component = this.subject();
  Ember.run(function(){
    component.set('isOpen', false);
    component.openSidebar();
  });

  equal(component.isOpen, true);
});

test('closeSidebar sets isOpen to false', function() {
  expect(1);

  var component = this.subject();
  Ember.run(function(){
    component.closeSidebar();
  });

  equal(component.isOpen, false);
});

test('no cover when isOpen is false', function() {
  expect(2);

  var component = this.subject();
  var $component = this.append();

  Ember.run(function(){
    component.set('isOpen', false);
  });
  equal($component.find('.cover').length, 0);

  Ember.run(function(){
    component.set('isOpen', true);
  });

  equal($component.find('.cover').length, 1);

});
