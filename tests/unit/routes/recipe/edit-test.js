import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:recipe/edit', 'RecipeEditRoute', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

test('controller is recipe', function() {
  expect(1);
  var route = this.subject();
  equal(route.get('controllerName'), 'recipe');
});
