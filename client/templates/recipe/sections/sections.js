Template.recipeSections.events({
  "click .add-section": function(event, template){
    Sections.insert({
      recipeId: Template.parentData()._id,
      name: 'new section:' + Sections.find().count(),
    });

    return false;
  },
});

Template.recipeSections.helpers({
  showSections: function(){
    var recipeId = Template.parentData()._id;
    var hasSections = Sections.find({recipeId: recipeId}).count() > 1;
    var showSections = Meteor.user().profile.settings.recipe.showSections.value;
    
    return showSections | hasSections;
  }
});