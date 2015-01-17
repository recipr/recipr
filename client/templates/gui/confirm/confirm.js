Template.confirm.helpers({
  showConfirm: function(){
    return this.show ? 'show' : '';
  }
});

Template.confirm.events({
  'click .accept-confirm': function(event){
    Session.set('show-confirm', false);
  }
});

Template.confirm.events({
  'click .cancel-confirm': function(event){
    Session.set('show-confirm', false);
  }
});