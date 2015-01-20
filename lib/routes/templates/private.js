PrivateController = RouteController.extend({  
  onBeforeAction: function(){
    if(!Meteor.user()){
      Router.go('login');
    }

    this.next();
  }
});
