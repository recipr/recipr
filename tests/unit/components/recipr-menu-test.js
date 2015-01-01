import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('recipr-menu', 'ReciprMenuComponent', {});

test('it renders', function() {
  expect(2);

  var component = this.subject();
  equal(component._state, 'preRender');

  this.append();
  equal(component._state, 'inDOM');
});

test('has menu class', function() {
  expect(1);

  var component = this.subject();
  this.append();
  equal(component.classNames.contains('menu'), true);
});
