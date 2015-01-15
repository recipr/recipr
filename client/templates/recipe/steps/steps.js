Template.recipeSteps.created = function(){
  var self = this;

  this.init = function(){
    //Remove leftover edit mode. just in case
    Session.set('stepEditMode', false);

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
      order: 1,
      editMode: true,
    });
    Session.set('stepEditMode', true);
  };

  this.init();
};

Template.recipeSteps.events({
  "click .add-step": function(event, template){
    var $content = template.find('.new-step');

    if($content.value.trim().length !== 0){
      var stepCount = Steps.find({
        sectionId: Template.parentData()._id
      }).count();

      Steps.insert({
        sectionId: Template.parentData()._id,
        content: $content.value,
        order: stepCount + 1
      });
    }

    $content.value = '';

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

  showAddForm: function(){
    return !Session.get('stepEditMode');
  },

  newPlaceholder: function(){
    var value;
    switch(this.count()){
      case 1:
        value = 'second step';
        break;
      case 2:
        value = 'third step';
        break;
      default:
        value = 'next step';
        break;
    }
    return value;
  }
});