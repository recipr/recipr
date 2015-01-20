Template.login.created = function(){
  this.loginError = new Blaze.ReactiveVar();
  this.show = new Blaze.ReactiveVar();
};

Template.login.events({
  'submit .login-form': function(event, template){
    template.loginError.set(false);
    event.preventDefault();
    var email = template.find('#login-email').value;
    var password = template.find('#login-password').value;
    Meteor.loginWithPassword(email, password, function(error){
      if(error){
        template.loginError.set(error.reason);
      } else {
        Router.go('recipes');
      }
    });
  }
});

Template.login.helpers({
  loginError: function(){
    return Template.instance().loginError.get();
  },

  show: function(){
    return Template.instance().show.get();
  }
});

Template.login.rendered = function(){
  Template.instance().show.set(true);
};