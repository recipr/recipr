Template.contextMenu.events({
  "click .toggle-context-menu": function (event) {
    Session.set('showContextMenu', !Session.get('showContextMenu'));
  },

  "click .context-menu .cover": function (event) {
    Session.set('showContextMenu', false);
  },
});


Template.contextMenu.helpers({
  showContextMenu: function(){
    return Session.get('showContextMenu');
  },

  hasContextMenu: function(){
    return Session.get('hasContextMenu');
  },
});