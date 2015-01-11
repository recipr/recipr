Template.ApplicationLayout.events({
  "click .menu-toggle": function (event) {
    Session.set('showSidebar', !Session.get('showSidebar'));
  },
});