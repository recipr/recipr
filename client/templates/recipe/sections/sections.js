Template.recipeSections.events({
  "click .add-section": function(event, template){

    Sections.insert({
      name: 'new section:' + Sections.find().count(),
    });

    return false;
  },
});

Template.recipeSections.helpers({
  showSections: function(){
    return Settings.findOne({
      type: 'gui',
      key: 'showSections',
    }).value || Sections.find().count() > 1;
  }
});