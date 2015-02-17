SetupController = PublicController.extend({  
  onBeforeAction: function(){

    Meteor.call('hasSetup', function(error, response) {
      if(!error){
        Router.go('recipes');
      }
    });

    this.next();
  }
});