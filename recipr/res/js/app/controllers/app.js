App.ApplicationController = Ember.ObjectController.extend({

  sidebarIsOpen: false,

  actions: {
    toggleSidebar: function(){
      this.set('sidebarIsOpen', !this.get('sidebarIsOpen'));
    }
  }
});
