import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('recipr-steps', 'ReciprStepComponent', {
    needs: ['component:recipr-step']
});

test('test recipr-steps', function() {
    var component = this.subject();
    equal(component.state, 'preRender');
    this.append();
    equal(component.state, 'inDOM');
});

test('test recipr-steps has recipr step children', function() {
    var component = this.subject();
    var steps = [
        {
            index: 1,
            content: 'step1'
        },
        {
            index: 1,
            content: 'step2'
        }
    ];
    
    Ember.run(function(){
        component.set('steps', steps);
    });

    equal(this.$().find('.recipr-step').length, 2);
});

test('test recipr-steps has add step button', function() {
    var component = this.subject();

    equal(this.$().find('.addStep').length, 1);
});

test('test recipr-steps click on addStep button adds empty step in edit mode', function() {
    var component = this.subject();
    
    equal(this.$().find('.recipr-step').length, 0);

    this.$().find('.addStep').click();

    equal(this.$().find('.recipr-step').length, 1);
    equal(this.$().find('.recipr-step').hasClass('edit'), true);
});

test('test recipr-steps add button hidden if a step is in edit mode', function() {
    var component = this.subject();
    
    this.$().find('.addStep').click();

    equal(this.$().find('.recipr-step').length, 1);
    equal(this.$().find('.addStep').length, 0);
});