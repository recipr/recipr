import {
  moduleFor,
  test
} from 'ember-qunit';

var originalAlert;

moduleFor('route:application', 'ApplicationRoute', {
  setup: function() {
    originalAlert = window.alert;
  },
  teardown: function() {
    window.alert = originalAlert;
  }
});

test('it exists', function() {
  var route = this.subject();
  ok(route);
});

test('Alert is called on displayAlert', function() {
  expect(1);

  var route = this.subject(),
      expectedText = 'foo';

  window.alert = function(text) {
    equal(text, expectedText, 'expected ' + text + ' to be ' + expectedText);
  };

  route._displayAlert(expectedText);
});
