import Ember from 'ember';

export default Ember.Component.extend({
  route: '',
  name: '',
  icon: '',

  actions: {
    itemClick: function(){
      this._itemClick();
    }
  },

  _itemClick: function(){
    this.get('parentView').send('onItemClicked');
  }
});
