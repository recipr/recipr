Template.tabs.created = function(){
  this.tabState = Template.currentData().tabState;
}

Template.tabs.events({
  'click .show-tab': function(event, template){
    template.data.tabState.set(this.value);
  }
});