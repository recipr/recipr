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
    return Settings.findOne({
      type: 'gui',
      key: 'showSections',
    }).value || Sections.find({recipeId: recipeId}).count() > 1;
  }
});