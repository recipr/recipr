Template.recipeSection.events({
  "click .remove-section": function(event, template){
    if(this.isDefault){
      return false;
    }
    Sections.remove(this._id);
    return false;
  },
});

Template.recipeSection.helpers({
  hasMultipleSections: function(){
    return Sections.find().count() > 1;
  },

  showDeleteButton: function(){
    return !this.isDefault;
  }
});