Template.setup.helpers({
  setupSchema: function(){
    return Schemes.Setup;
  }
})

AutoForm.hooks({
  'setupForm': {
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