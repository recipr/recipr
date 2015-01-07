import Ember from 'ember';

export default Ember.Component.extend(Ember.Evented, {
  classNames: ['form-field'],

  isValid: true,
  errorMessage: '',
  showError: function(){
    if(!this.get('isValid') && this.get('errorMessage.length')){
      return true;
    }
    return false;
  }.property('isValid', 'errorMessage'),

  init: function(){
    this._super();
    var self = this;
    var controller = this.get('controller');
    console.log('init form field');
    if(controller){
      console.log('init validate event');
      controller.on('validate', function(){
        console.log('form-field validate');
        self._validate();
      });
    }
  },

  actions: {
    validate: function(){
      this._validate();
    }
  },

  _validate: function(){
    this.sendAction('onValidate');
  }
});
