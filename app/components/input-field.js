import FormField from './form-field';
import Ember from 'ember';

export default FormField.extend({
  type: 'text',
  placeholder: '',
  pattern: '',
  required: false,
  value: '',
  success: false,
  successTimeout: 1000,

  _lastState: true,

  _validate: function(){
    console.log('validate');
    this.set('value', this.get('value').trim());
    if(this.get('required') && this.get('value.length') === 0){
      this.set('isValid', false);
    } else {
      this.set('isValid', this._checkPattern());
    }
    this.sendAction('onValidate');
  },

  _checkPattern: function(){
    if(!this.get('pattern').toString().length){
      return true;
    }

    var pattern = new RegExp(this.get('pattern'));
    return pattern.test(this.get('value'));
  },

  _validateOnInvalid: function(){
    if(!this.get('isValid')){
      this._validate();
    }
  }.observes('value'),

  _setSuccessClass: function(){
    if(!this.get('_lastState') && this.get('isValid')){
      this.set('success', true);
      var self = this;
      Ember.run.later(function(){
        self.set('success', false);
      }, this.get('successTimeout'));
    }
    this.set('_lastState', this.get('isValid'));
  }.observes('isValid')
});





