Template.recipeSections.events({
  "click .add-section": function(event, template){

    Sections.insert({
      name: 'new section:' + (Sections.find().fetch().length),
    });

    return false;
  },

  "keyup .section-name": function(event, template){
    Sections.update(this._id, {
      name: event.target.value,
    });

    return false;
  }
});