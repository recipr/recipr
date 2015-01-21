Template.recipeStep.events({
  "click .remove-step": function(event, template){
    Steps.remove(this._id);
    return false;
  },

  "click .edit-step": function(event, template){
    Steps.update({_sectionId: this._sectionId}, {$set: {editMode: false}}, {multi: true});
    Steps.update({_id: this._id}, {$set: {editMode: true}});
    Session.set('stepEditMode', true);
    return false;
  },

  "click .close-step, focusout .step-edit": function(event, template){
    Steps.update({_id: this._id}, {$set: {editMode: false}});
    Session.set('stepEditMode', false);

    var content = template.find('.step-edit').innerHTML;

    if(content.length){
      Steps.update(this._id, { $set: { 
        content: content,
      }});
    } else {
      Steps.remove(this._id);
    }

    return false;
  },
});

Template.recipeStep.helpers({
  isInEditMode: function(){
    return this.editMode || 
      ( Template.parentData().count() === 1 
        && !Settings.findOne({type: 'gui', key: 'showSteps'}).value
      );
  },

  noOtherStepIsEdited: function(){
    return !Session.get('stepEditMode');
  },

  cleanContent: function(){
    var content = Steps.find({_id: this._id}, {reactive:false}).fetch()[0].content;
    return content.replace(/<br\s*\/?>/mg,"\n"); 
  },
});