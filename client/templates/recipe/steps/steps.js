Template.recipeSteps.created = function(){
  Session.set('stepEditMode', false);
};

Template.recipeSteps.events({
  "click .add-step, focusout .new-step": function(event, template){
    var $content = template.find('.new-step');

    if($content.innerHTML.trim().length !== 0){
      var stepCount = Steps.find({
        sectionId: Template.parentData()._id
      }).count();

      Steps.insert({
        sectionId: Template.parentData()._id,
        content: $content.innerHTML,
        order: stepCount + 1
      });
    }

    $content.innerHTML = '';

    return false;
  }
});

Template.recipeSteps.helpers({
  showAddForm: function(){
    return !Session.get('stepEditMode');
  },

  newPlaceholder: function(){
    var value;
    switch(this.count()){
      case 0:
        value = 'first step';
        break;
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