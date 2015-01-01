import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('recipr-menu-item', 'ReciprMenuItemComponent', {});

test('it renders', function() {
  expect(2);

  var component = this.subject();
  equal(component._state, 'preRender');
  this.append();
  equal(component._state, 'inDOM');
});

test('has icon when icon is provided', function() {
  expect(3);

  var component = this.subject();
  var $component = this.append();

  equal($component.find('.icon').length, 0);

  Ember.run(function(){
    component.set('icon', 'icon-placeholder');
  });

  var icons = $component.find('.icon');
  equal(icons.length, 1);
  equal(icons[0].classList.contains('icon-placeholder'), true);
});
