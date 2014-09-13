import Ember from "ember";
import { test, moduleForComponent } from 'ember-qunit';

moduleForComponent('recipr-steps', 'ReciprStepComponent', {
    needs: ['component:recipr-step', 'component:recipr-focus-textarea']
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

    equal(this.$().find('.add-step').length, 1);
});

test('test recipr-steps is in addMode after step button', function() {
    var component = this.subject();

    this.$().find('.add-step').click();

    Ember.run(function(){
        equal(component.get('addMode'), true);
    });
});

test('test recipr-steps has add form when in addMode', function() {
    var component = this.subject();
    
    equal(this.$().find('.add-form').length, 0);

    Ember.run(function(){
        component.set('addMode', true);
    });

    equal(this.$().find('.add-form').length, 1);
    var addForm = this.$().find('.add-form');
    equal(addForm.find('.save').length, 1);
    equal(addForm.find('.cancel').length, 1);
    equal(addForm.find('.step-content').length, 1);
});

test('test recipr-steps no add button when in addMode', function() {
    var component = this.subject();
    
    equal(this.$().find('.add-step').length, 1);

    Ember.run(function(){
        component.set('addMode', true);
    });

    equal(this.$().find('.add-step').length, 0);
});


test('test recipr-steps close edit mode when cancel is clicked', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
    });

    this.$().find('.cancel').click();

    equal(component.get('addMode'), false);
});

test('test recipr-steps close edit mode when save is clicked', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', 'TEST');
    });

    this.$().find('.save').click();

    equal(component.get('addMode'), false);
});

test('test recipr-steps disable save when new step is empty', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', '');
    });

    this.$().find('.save').click();

    equal(component.get('addMode'), true);
});

test('test recipr-steps error is true on error', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', '');
    });

    this.$().find('.save').click();
    equal(component.get('error'), true);
});

test('test recipr-steps has error class on error', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', '');
    });

    this.$().find('.save').click();
    equal(this.$().find('.add-form.error').length, 1);
});

test('test recipr-steps remove error on successful save', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', 'TEST');
        component.set('error', true);
    });

    this.$().find('.save').click();

    equal(component.get('error'), false);
});

test('test recipr-steps content is empty after saving', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', 'TEST');
    });

    this.$().find('.save').click();

    equal(component.get('stepContent').length, 0);
});

test('test recipr-steps trim whitespaces at saving', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', '     ');
    });

    this.$().find('.save').click(); 

    equal(component.get('error'), true);
});

test('test recipr-steps error is false after cancel', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('error', true);
    });

    this.$().find('.cancel').click(); 

    equal(component.get('error'), false);
});


test('test recipr-steps stepContent empty after cancel', function() {
    var component = this.subject();
    
    Ember.run(function(){
        component.set('addMode', true);
        component.set('stepContent', 'TEST');
    });

    this.$().find('.cancel').click(); 

    equal(component.get('stepContent').length, 0);
});


