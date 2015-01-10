Template.recipeSection.events({
  "click .remove-section": function(event, template){
    Sections.remove(this._id);
    return false;
  },
});

Template.recipeSection.helpers({
  hasMultipleSections: function(){
    console.log('count');
    return Sections.find().count() > 1;
  }
});