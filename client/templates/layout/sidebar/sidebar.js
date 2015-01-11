Template.sidebar.events({
  "click .sidebar .cover": function (event) {
    Session.set('showSidebar', false);
  }
});


Template.sidebar.helpers({
  active: function(data){
    var currentRoute = Router.current();
    if(!currentRoute.route){
      return;
    }

    var routeName = currentRoute.route.getName()
    if(data && data.hash && data.hash.route && data.hash.route == routeName){
      return 'active';
    }

    return;
  },
  showSidebar: function(){
    return Session.get('showSidebar') ? 'open' : 'closed';
  },
});