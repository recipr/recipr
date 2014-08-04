import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('recipr-step', 'ReciprStepComponent');

test('test recipr-step', function() {
    var component = this.subject();
    equal(component.isEditable, false);
    equal(component.state, 'preRender');
    this.append();
    equal(component.state, 'inDOM');
});

test('test recipr-step is in edit mode after click', function() {
    var component = this.subject();
    equal(component.isEditable, false);

    this.$().click(function(){
        equal(component.isEditable, true);
    });
});

test('test recipr-step has save button only in edit mode', function() {
    var component = this.subject();
    equal(component.isEditable, false);

    equal(this.$().find('.save').length, 0);

    Ember.run(function(){
        component.set('isEditable', true);
    });

    equal(this.$().find('.save').length, 1);

    Ember.run(function(){
        component.set('isEditable', false);
    });

    equal(this.$().find('.save').length, 0);
});

test('test recipr-step has delete button only in edit mode', function() {
    var component = this.subject();
    equal(component.isEditable, false);

    equal(this.$().find('.delete').length, 0);

    Ember.run(function(){
        component.set('isEditable', true);
    });

    equal(this.$().find('.delete').length, 1);

    Ember.run(function(){
        component.set('isEditable', false);
    });

    equal(this.$().find('.delete').length, 0);
});

test('test recipr-step is in view mode after save', function() {
    var component = this.subject();
    equal(component.isEditable, false);
    Ember.run(function(){
        component.set('isEditable', true);
        equal(component.isEditable, true);
    });
    this.$().find('.save')[0].click(function(){
        equal(1, 2);
        equal(component.isEditable, false);
    });
});

test('test recipr-step no initial index is set', function() {
    var component = this.subject();
    equal(component.index, false);
});

test('test recipr-step is initial in view mode', function() {
    var component = this.subject();
    equal(component.isEditable, false);
});

test('test recipr-step has index bubble when index is set', function() {
    var component = this.subject();
    equal(component.index, false);

    equal(this.$().find('.index').length, 0);

    Ember.run(function(){
        component.set('index', true);
    });

    equal(this.$().find('.index').length, 1);
});
