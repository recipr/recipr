Template.register.created = function(){
  this.show = new Blaze.ReactiveVar();
};

Template.register.rendered = function(){
  Template.instance().show.set(true);
};

Template.register.helpers({
  show: function(){
    return Template.instance().show.get();
  },
  
  registerSchema: function(){
    return Schemes.Register;
  }
});

AutoForm.hooks({
  'registerForm': {
    onSuccess: function (insertDoc, data) {
      Meteor.loginWithPassword(data.email, data.password, function(error){
        if(error){
          return;
        }
        Router.go('recipes');
      });

      return false;
    }
  }
});