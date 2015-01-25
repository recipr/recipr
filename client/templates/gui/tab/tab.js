Template.tab.helpers({
  active: function(){
    return Template.parentData().tabState.get() == this.value;
  },
});