Template.ApplicationLayout.events({
  "click .menu-toggle": function (event) {
    Session.set('showSidebar', !Session.get('showSidebar'));
  },

  "mouseover [data-tooltip]": function(event, template){
    Session.set('showTooltip', true);
    Session.set('tooltipContent', event.target.dataset.tooltip);
  },

  "mouseout [data-tooltip]": function(event){
    Session.set('showTooltip', false);
  }
});
