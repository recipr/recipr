Template.recipeContext.events({
  "click .show-intro": function (event) {
    var state = event.target.checked;
    Session.set('showIntro', state);
  }
});

Template.recipeContext.helpers({
  showIntro: function(){
    return Session.get('showIntro');
  },
});