RegisterController = PublicController.extend({  
  onBeforeAction: function(){
    if(Meteor.user()){
      //Router.go('recipes');
    }

    this.next();
  }
}); 