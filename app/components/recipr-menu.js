import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['menu'],
  actions: {
    onItemClicked: function(){
      this.get('parentView').send('closeSidebar');
    }
  }
});
