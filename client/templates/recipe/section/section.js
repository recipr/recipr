Template.recipeSection.events({
  "click .remove-section": function(event, template){
    if(this.isDefault){
      return false;
    }
    Sections.remove(this._id);
    return false;
  },

  "keyup .section-name": function(event, template){
    Sections.update(this._id, { $set: { 
      name: event.target.value,
    }});
    return false;
  }
});

Template.recipeSection.helpers({
  hasMultipleSections: function(){
    return Sections.find().count() > 1;
  },

  showDeleteButton: function(){
    return !this.isDefault;
  },

  ingredients: function(){
    return RecipeIngredients.find({
      sectionId: this._id
    });
  },

  steps: function(){
    return Steps.find({
      sectionId: this._id
    });
  },
});