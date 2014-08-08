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
    this.$().find('.save').click(function(){
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

    equal(this.$().find('.step-index').length, 0);

    Ember.run(function(){
        component.set('index', true);
    });

    equal(this.$().find('.step-index').length, 1);
});

test('test recipr-step has edit class in edit mode', function() {
    var component = this.subject();
    equal(this.$().hasClass('edit'), false);

    Ember.run(function(){
        component.set('isEditable', true);
    });

    equal(this.$().hasClass('edit'), true);
});

test('test recipr-step has textarea in edit mode', function() {
    var component = this.subject();
    equal(this.$().find('textarea').length, 0);

    Ember.run(function(){
        component.set('isEditable', true);
    });

    equal(this.$().find('textarea').length, 1);
});


test('test recipr-step textarea contains content in edit mode', function() {
    var component = this.subject();
    var content = 'test content';

    Ember.run(function(){
        component.set('content', content);
        component.set('isEditable', true);
    });

    equal(this.$().find('textarea').val(), content);
});

test('test recipr-step contains content in view mode', function() {
    var component = this.subject();
    var content = 'test content';

    Ember.run(function(){
        component.set('content', content);
    });

    equal(this.$().find('.step-content').text(), content);
});
