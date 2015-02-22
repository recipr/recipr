Template.recipeSteps.created = function(){
  Session.set('stepEditMode', false);
};

Template.recipeSteps.events({
  "click .add-step": function(event, template){
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

    template.find('.new-step .ql-editor').innerHTML = '';

    return false;
  }
});

Template.recipeSteps.helpers({
  showAddForm: function(){
    return !Session.get('stepEditMode');
  },

  newPlaceholder: function(){
    switch(this.count()){
      case 0:
        return TAPi18n.__("recipe.steps-placeholder-first");
        break;
      case 1:
        return TAPi18n.__("recipe.steps-placeholder-second");
        break;
      default:
        return TAPi18n.__("recipe.steps-placeholder-next");
        break;
    }
  }
});