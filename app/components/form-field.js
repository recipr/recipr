import Ember from 'ember';

export default Ember.Component.extend({
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
    if(controller){
      controller.on('validate', function(){
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
