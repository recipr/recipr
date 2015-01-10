Template.recipeStep.events({
  "keyup .step-content": function(event, template){
    Steps.update(this._id, { $set: { 
      content: event.target.value,
    }});
    return false;
  },

  "click .remove-step": function(event, template){
    if(this.order === 1){
      return false;
    }
    Steps.remove(this._id);
    return false;
  }
});

Template.recipeStep.helpers({
  isNotFirstStep: function(){
    return this.order !== 1;
  },

  showSteps: function(){
    return Settings.findOne({
      type: 'gui',
      key: 'showSteps',
    }).value || Template.parentData().count() > 1;
  },
})