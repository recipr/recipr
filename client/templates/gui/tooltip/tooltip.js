
Template.tooltips.helpers({
  show: function(){
    return Session.get('showTooltip') ? 'show' : '';
  },

  content: function(){
    return Session.get('tooltipContent');
  },
  position: function(){
    return '';
  } 
});

Template.tooltips.events({
  "click .tooltip": function(event){
    Session.set('showTooltip', false);
  }
});
