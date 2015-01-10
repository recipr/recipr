Template.recipeSections.events({
  "click .remove-section": function(event, template){
    Sections.remove(this._id);
    return false;
  },
});
