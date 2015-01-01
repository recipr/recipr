import Ember from 'ember';

export default Ember.Component.extend({

  meta: undefined,
  model: undefined,

  actions: {
    edit: function(){
      this._edit();
    },

    delete: function(){
      this._delete();
    }
  },

  _edit: function(){
    this.sendAction('onEdit', this.get('model'));
    if(this.get('parentView')){
      this.get('parentView').send('onEdit', this.get('model'));
    }
  },

  _delete: function(){
    this.sendAction('onDelete', this.get('model'));
    if(this.get('parentView')){
      this.get('parentView').send('onDelete', this.get('model'));
    }
  }
});
