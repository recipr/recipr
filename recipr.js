Meteor.startup(function () {
  if(Meteor.isClient){
    TAPi18n.setLanguage('de');
  }
});