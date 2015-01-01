import Ember from 'ember';

export default Ember.Component.extend({

  menuState: false,
  contextMenuState: false,

  showCover: function() {
    return this.get('contextMenuState');
  }.property('contextMenuState'),

  actions: {
    toggleMenu: function(){
      this._toggleMenu();
    },
    toggleContextMenu: function(){
      this._toggleContextMenu();
    }
  },

  _toggleMenu: function() {
    this.sendAction('onToggleMenu');
  },

  _toggleContextMenu: function() {
    this.set('contextMenuState', !this.get('contextMenuState'));
  }
});
