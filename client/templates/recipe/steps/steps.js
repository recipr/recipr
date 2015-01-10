Template.recipeSteps.created = function(){
  var stepCount = Steps.find({
    sectionId: Template.parentData()._id
  }).count();

  if( stepCount !== 0){
    return;
  }

  Steps.insert({
    sectionId: Template.parentData()._id,
    content: '',
    order: 1
  });
}

Template.recipeSteps.events({
  "click .add-step": function(event, template){
    var stepCount = Steps.find({
      sectionId: Template.parentData()._id
    }).count();

    Steps.insert({
      sectionId: Template.parentData()._id,
      content: '',
      order: stepCount + 1
    });
    return false;
  }
});

Template.recipeSteps.helpers({
  showSteps: function(){
    return Settings.findOne({
      type: 'gui',
      key: 'showSteps',
    }).value || this.count() > 1;
  },
});