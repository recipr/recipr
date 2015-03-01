Template.recipeSection.events({
  "click .remove-section": function(event, template){
    if(this.isDefault){
      return false;
    }
    Steps.remove({
      sectionId: this._id
    });
    RecipeIngredients.remove({
      sectionId: this._id
    });
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
    return Sections.find({recipeId: this.recipeId}).count() > 1;
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

  showSteps: function(){
    var hasSteps = Steps.find({sectionId: this._id}).count() > 1;
    var showSteps = Meteor.user().profile.settings.recipe.showSteps.value;
    
    return showSteps | hasSteps;
  },

  showTab: function(value){
    return Template.parentData(2).tabState.get() === value;
  },
});
