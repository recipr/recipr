Template.ApplicationLayout.rendered = function(){
  this.onScroll = function(event){
    var oldScrollPos = Session.get('scroll-pos');
    var newScrollPos = window.scrollY;

    if(oldScrollPos > newScrollPos){
      Session.set('scroll-dir', -1);
    } else if(oldScrollPos == newScrollPos) {
      Session.set('scroll-dir', 0);
    } else {
      Session.set('scroll-dir', 1);
    } 

    Session.set('scroll-pos', newScrollPos);
  }

  window.addEventListener('scroll', this.onScroll, false);
}

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
  },

  "scroll .app-header": function(event){
    console.log('scroll');
  }
});

Template.ApplicationLayout.helpers({
  hideHeader: function(){
    return Session.get('scroll-dir') == 1;
  }
});

