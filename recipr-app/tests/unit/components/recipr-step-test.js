import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('recipr-step', 'ReciprStepComponent', {
    needs: ['component:recipr-focus-textarea']
});

var step = {
    index: 1,
    content: 'test'
};

test('test recipr-step', function() {

    var component = this.subject();
    component.set('step', step);
    equal(component.state, 'preRender');
    this.append();
    equal(component.state, 'inDOM');
});

test('test recipr-step has save button only in edit mode', function() {
    var component = this.subject();
    component.set('step', step);

    equal(this.$().find('.save').length, 0);

    Ember.run(function(){
        component.set('openedStep', step);
    });

    equal(this.$().find('.save').length, 1);

    Ember.run(function(){
        component.set('openedStep', null);
    });

    equal(this.$().find('.save').length, 0);
});

test('test recipr-step has delete button only in edit mode', function() {
    var component = this.subject();
    component.set('step', step);

    equal(this.$().find('.delete').length, 0);

    Ember.run(function(){
        component.set('openedStep', step);
    });

    equal(this.$().find('.delete').length, 1);

    Ember.run(function(){
        component.set('openedStep', null);
    });

    equal(this.$().find('.delete').length, 0);
});

test('test recipr-step is in view mode after save', function() {
    var component = this.subject();
    component.set('step', step);

    Ember.run(function(){
        component.set('openedStep', step);
    });

    equal(component.get('isEditable'), true);

    this.$().find('.save').click(function(){
        equal(component.get('isEditable'), false);
    });
});

test('test recipr-step is initial in view mode', function() {
    var component = this.subject();
    component.set('step', step);

    equal(component.get('isEditable'), false);
});

test('test recipr-step has edit class in edit mode', function() {
    var component = this.subject();
    component.set('step', step);

    equal(this.$().hasClass('edit'), false);

    Ember.run(function(){
        component.set('openedStep', step);
    });

    equal(this.$().hasClass('edit'), true);
});

test('test recipr-step has textarea in edit mode', function() {
    var component = this.subject();
    component.set('step', step);

    equal(this.$().find('textarea').length, 0);

    Ember.run(function(){
        component.set('openedStep', step);
    });

    equal(this.$().find('textarea').length, 1);
});


test('test recipr-step textarea contains content in edit mode', function() {
    var component = this.subject();
    component.set('step', step);

    Ember.run(function(){
        component.set('openedStep', step);
    });

    equal(this.$().find('textarea').val(), step.content);
});

test('test recipr-step contains content in view mode', function() {
    var component = this.subject();
    component.set('step', step);

    equal(this.$().find('.step-content').text(), step.content);
});
