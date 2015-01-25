PrivateController = RouteController.extend({  
  onBeforeAction: function(){
    if(!Meteor.userId()){
      Router.go('login');
    }

    this.next();
  }
});
