import {
  moduleForModel,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForModel('recipe', 'Recipe', {
  needs: []
});

test('it exists', function() {
  var model = this.subject();
  var store = this.store();
  ok(!!model);
});

test('formatedDate formats date', function() {
  var model = this.subject();

  Ember.run(function(){
    model.set('date', 0);
  });
  equal(model.get('formatedDate'), 'January 1, 1970');
});

test('formatedDate updates width date', function() {
  var model = this.subject();

  Ember.run(function(){
    model.set('date', 0);
  });
  equal(model.get('formatedDate'), 'January 1, 1970');

  Ember.run(function(){
    model.set('date', '2014-12-22');
  });
  equal(model.get('formatedDate'), 'December 22, 2014');
});
