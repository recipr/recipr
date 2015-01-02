import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('ingredient', 'Ingredient', {
  // Specify the other units that are required for this test.
  needs: ['model:recipe']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
