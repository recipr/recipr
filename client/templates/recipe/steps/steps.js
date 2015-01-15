Template.recipeSteps.created = function(){
  var self = this;

  this.init = function(){
    var stepCount = Steps.find({
      sectionId: Template.parentData()._id
    }).count();

    if( stepCount === 0){
      self.addFirstStep();
    }
  };

  /**
  * Add empty step with order 1 to section
  * Every recipe needs at least one step
  */
  this.addFirstStep = function(){
    Steps.insert({
      sectionId: Template.parentData()._id,
      content: '',
      order: 1
    });
  };

  this.init();
};

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