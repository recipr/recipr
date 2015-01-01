import Ember from 'ember';

export default Ember.Controller.extend({
  sidebarIsOpen: true,

  actions: {
    toggleSidebar: function(){
      this._toggleSidebar();
    }
  },

  _toggleSidebar: function(){
    this.set('sidebarIsOpen', !this.get('sidebarIsOpen'));
  }
});

