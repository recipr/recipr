import Ember from 'ember';

export default Ember.Component.extend({
  isOpen: true,

  actions: {
    toggleSidebar: function(){
      this.toggleSidebar();
    },
    closeSidebar: function(){
      this.closeSidebar();
    },
  },

  openSidebar: function(){
    this.set('isOpen', true);
  },

  closeSidebar: function(){
    this.set('isOpen', false);
  },

  toggleSidebar: function(){
    this.set('isOpen', !this.get('isOpen'));
  },
});
