import {
  moduleFor,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleFor('controller:application', 'ApplicationController', {});

test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});

test('sidebarIsOpen is initialy true', function() {
  expect(1);

  var controller = this.subject();
  equal(controller.sidebarIsOpen, true);
});

test('_toggleMenu method changes between true/false', function() {
  expect(2);

  var controller = this.subject();
  Ember.run(function(){
    controller._toggleSidebar();
  });

  equal(controller.sidebarIsOpen, false);

  Ember.run(function(){
    controller._toggleSidebar();
  });

  equal(controller.sidebarIsOpen, true);
});
