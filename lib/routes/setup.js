SetupController = PublicController.extend({  
  onBeforeAction: function(){

    Meteor.call('hasSetup', function(error, response) {
      if(!error && response){
        Router.go('recipes');
      }
    });

    this.next();
  }
});